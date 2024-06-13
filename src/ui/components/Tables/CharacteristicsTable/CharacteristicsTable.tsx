'use client';

import React, { useEffect, useState } from 'react';
import { ICharacteristic, ISearchParams } from '@/interfaces';
import { getAllCharacteristicsByParams } from '@/app/lib/characteristics/data';
import { getDataFields } from '@/common/helpers/getDataFields';
import { Pagination, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '@/ui/components';

type Props = {
    searchParams: ISearchParams;
};

const CharacteristicsTable: React.FC<Props> = ({ searchParams }) => {
    const [characteristics, setCharacteristics] = useState<ICharacteristic[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const { page } = searchParams;

    useEffect(() => {
        const fields = ['id', 'value'];
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
                        <TableHeadCell>Характеристика</TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {characteristics.length
                        ? characteristics.map((characteristic) => (
                              <TableRow key={characteristic?.id}>
                                  <TableCell>{characteristic?.id}</TableCell>
                                  <TableCell>{characteristic?.value}</TableCell>
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