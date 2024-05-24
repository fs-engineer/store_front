import React from 'react';
import Table from '@/ui/components/Tables/Table/Table';
import TableHead from '@/ui/components/Tables/Table/TableHead';
import TableRow from '@/ui/components/Tables/Table/TableRow';
import TableHeadCell from '@/ui/components/Tables/Table/TableHeadCell';
import TableBody from '@/ui/components/Tables/Table/TableBody';
import TableCell from '@/ui/components/Tables/Table/TableCell';
import { getAllBrands } from '@/app/lib/brands/data';
import { ISearchParams } from '@/interfaces';
import { getDataFields } from '@/common/helpers/getDataFields';

const BrandsTable = async ({ searchParams }: ISearchParams) => {
    const brandsFields = ['id', 'name', 'country'];
    const data = await getAllBrands({ searchParams });
    if (!data) {
        throw new Error('Щось пішло не так з цими брендами!');
    }

    const { brands, count, totalPages } = data;
    if (!brands) {
        throw new Error('Щось пішло не так з цими брендами!');
    }

    const filteredBrands = getDataFields(brands, brandsFields);

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeadCell>id</TableHeadCell>
                    <TableHeadCell>Назва</TableHeadCell>
                    <TableHeadCell>Країна</TableHeadCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {filteredBrands.length
                    ? filteredBrands.map((brand) => (
                          <TableRow key={brand?.id}>
                              <TableCell>{brand?.id}</TableCell>
                              <TableCell>{brand?.name}</TableCell>
                              <TableCell>{brand?.country?.name}</TableCell>
                          </TableRow>
                      ))
                    : null}
            </TableBody>
        </Table>
    );
};

export default BrandsTable;
