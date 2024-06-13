'use client';

import React, { useEffect, useState } from 'react';
import { Pagination, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '@/ui/components';
import { IProductType, IProps } from '@/interfaces';
import { getAllProductTypesByParams } from '@/app/lib/productTypes/data';
import { getDataFields } from '@/common/helpers/getDataFields';

const ProductTypesTable: React.FC<IProps> = ({ searchParams }) => {
    const [productTypes, setProductTypes] = useState<IProductType[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const { page, query } = searchParams;

    useEffect(() => {
        const fields = ['id', 'name'];

        const fetchProductTypes = async () => {
            const data = await getAllProductTypesByParams({ searchParams });
            if (!data) {
                throw new Error('Щось пішло не так з цими типами!');
            }

            const { rows, count, totalPages } = data;
            if (!rows) {
                throw new Error('Щось пішло не так з цими типами!');
            }

            const filteredTypes = getDataFields(rows, fields) as IProductType[];

            setTotalPages(totalPages);
            setProductTypes(filteredTypes);
        };

        fetchProductTypes();
    }, [page, query]);

    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeadCell>id</TableHeadCell>
                        <TableHeadCell>Назва</TableHeadCell>
                        <TableHeadCell>Країна</TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {productTypes.length
                        ? productTypes.map((type) => (
                              <TableRow key={type?.id}>
                                  <TableCell>{type?.id}</TableCell>
                                  <TableCell>{type?.name}</TableCell>
                              </TableRow>
                          ))
                        : null}
                </TableBody>
            </Table>
            <Pagination totalPages={totalPages} />
        </>
    );
};

export default ProductTypesTable;
