'use client';

import React, { useEffect, useState } from 'react';
import Table from '@/ui/components/Tables/Table/Table';
import TableHead from '@/ui/components/Tables/Table/TableHead';
import TableRow from '@/ui/components/Tables/Table/TableRow';
import TableHeadCell from '@/ui/components/Tables/Table/TableHeadCell';
import TableBody from '@/ui/components/Tables/Table/TableBody';
import TableCell from '@/ui/components/Tables/Table/TableCell';
import { getAllBrandsByParams } from '@/app/lib/brands/data';
import { IBrand, ISearchParams } from '@/interfaces';
import { getDataFields } from '@/common/helpers/getDataFields';
import Pagination from '@/ui/components/Pagination/Pagination';

const BrandsTable = ({ searchParams }: ISearchParams) => {
    const brandsFields = ['id', 'name', 'country'];
    const [brandsData, setBrandsData] = useState<IBrand[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const { page } = searchParams;

    useEffect(() => {
        const fetchBrands = async () => {
            const data = await getAllBrandsByParams({ searchParams });

            if (!data) {
                throw new Error('Щось пішло не так з цими брендами!');
            }

            const { brands, count, totalPages } = data;
            if (!brands) {
                throw new Error('Щось пішло не так з цими брендами!');
            }

            const filteredBrands = getDataFields(brands, brandsFields) as IBrand[];

            setTotalPages(totalPages);
            setBrandsData(filteredBrands);
        };

        fetchBrands();
    }, [page]);

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
