'use client';

import React, { useEffect, useState } from 'react';
import { getAllBrandsByParams } from '@/app/lib/brands/data';
import { IBrand, IProps } from '@/interfaces';
import { getDataFields } from '@/common/helpers/getDataFields';
import { Pagination, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '@/ui/components';

const BrandsTable: React.FC<IProps> = ({ searchParams }) => {
    const [brandsData, setBrandsData] = useState<IBrand[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const { page } = searchParams;

    useEffect(() => {
        const fields = ['id', 'name', 'country'];
        const fetchBrands = async () => {
            const data = await getAllBrandsByParams({ searchParams });

            if (!data) {
                throw new Error('Щось пішло не так з цими брендами!');
            }

            const { brands, count, totalPages } = data;
            if (!brands) {
                throw new Error('Щось пішло не так з цими брендами!');
            }

            const filteredBrands = getDataFields(brands, fields) as IBrand[];

            setTotalPages(totalPages);
            setBrandsData(filteredBrands);
        };

        fetchBrands();
    }, [page, searchParams]);

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
                    {brandsData.length
                        ? brandsData.map((brand) => (
                              <TableRow key={brand?.id}>
                                  <TableCell>{brand?.id}</TableCell>
                                  <TableCell>{brand?.name}</TableCell>
                                  <TableCell>{brand?.country?.name}</TableCell>
                              </TableRow>
                          ))
                        : null}
                </TableBody>
            </Table>
            <Pagination totalPages={totalPages} />
        </>
    );
};

export default BrandsTable;
