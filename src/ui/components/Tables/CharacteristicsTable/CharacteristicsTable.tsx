'use client';

import React, { useEffect, useState } from 'react';
import { ICharacteristic, ISearchParams } from '@/interfaces';
import Table from '@/ui/components/Tables/Table/Table';
import TableHead from '@/ui/components/Tables/Table/TableHead';
import TableRow from '@/ui/components/Tables/Table/TableRow';
import TableHeadCell from '@/ui/components/Tables/Table/TableHeadCell';
import TableBody from '@/ui/components/Tables/Table/TableBody';
import TableCell from '@/ui/components/Tables/Table/TableCell';
import Pagination from '@/ui/components/Pagination/Pagination';
import { getAllCharacteristicsByParams } from '@/app/lib/characteristics/data';
import { getDataFields } from '@/common/helpers/getDataFields';

type Props = {
    searchParams: ISearchParams;
};

const CharacteristicsTable: React.FC<Props> = ({ searchParams }) => {
    const [characteristics, setCharacteristics] = useState<ICharacteristic[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const { page } = searchParams;

    useEffect(() => {
        const fields = ['id', 'name'];
        const fetchCharacteristics = async () => {
            const data = await getAllCharacteristicsByParams({ searchParams });

            if (!data) {
                throw new Error('Щось пішло не так з цими характеристиками!');
            }

            const { rows, count, totalPages } = data;
            if (!rows) {
                throw new Error('Щось пішло не так з цими характеристиками!');
            }

            const filteredCharacteristics = getDataFields(rows, fields) as ICharacteristic[];

            setTotalPages(totalPages);
            setCharacteristics(filteredCharacteristics);
        };

        fetchCharacteristics();
    }, [page, searchParams]);
    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeadCell>id</TableHeadCell>
                        <TableHeadCell>Назва</TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {characteristics.length
                        ? characteristics.map((characteristic) => (
                              <TableRow key={characteristic?.id}>
                                  <TableCell>{characteristic?.id}</TableCell>
                                  <TableCell>{characteristic?.name}</TableCell>
                              </TableRow>
                          ))
                        : null}
                </TableBody>
            </Table>
            <Pagination totalPages={totalPages} />
        </>
    );
};

export default CharacteristicsTable;
