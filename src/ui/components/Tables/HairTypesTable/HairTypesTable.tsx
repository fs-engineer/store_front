'use client';

import React, { useEffect, useState } from 'react';
import { IHairTypes, IProps } from '@/interfaces';
import { Pagination, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '@/ui/components';
import { getAllHairTypesByParams } from '@/app/lib/hairTypes/data';
import { getDataFields } from '@/common/helpers/getDataFields';
import { toast } from 'react-toastify';

const HairTypesTable: React.FC<IProps> = ({ searchParams }) => {
    const [hairTypes, setHairTypes] = useState<IHairTypes[]>([]);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fields = ['id', 'name'];

        const fetchHairTypes = async () => {
            const data = await getAllHairTypesByParams({ searchParams });

            if (!data) {
                throw new Error('Щось пішло не так з цими характеристиками!');
            }

            const { rows, count, totalPages } = data;
            if (!rows) {
                throw new Error('Щось пішло не так з цими характеристиками!');
            }

            const filteredHairTypes = getDataFields(rows, fields) as IHairTypes[];

            setTotalPages(totalPages);
            setHairTypes(filteredHairTypes);
            toast.info(`Знайдено ${count} типів волосся`);
        };

        fetchHairTypes();
    }, [searchParams]);
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
                    {hairTypes.length
                        ? hairTypes.map((hairType) => (
                              <TableRow key={hairType?.id}>
                                  <TableCell>{hairType?.id}</TableCell>
                                  <TableCell>{hairType?.name}</TableCell>
                              </TableRow>
                          ))
                        : null}
                </TableBody>
            </Table>
            <Pagination totalPages={totalPages} />
        </>
    );
};

export default HairTypesTable;
