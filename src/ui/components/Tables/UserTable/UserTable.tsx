import React from 'react';
import { getAllUsersByParams } from '@/app/lib/users/data';
import { IProps, IUser } from '@/interfaces';
import { getDataFields } from '@/common/helpers/getDataFields';
import { getRolesName } from '@/common/helpers/getRolesName';
import { Pagination, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '@/ui/components';

const UserTable: React.FC<IProps> = async ({ searchParams }) => {
    const userFields: string[] = ['id', 'email', 'name', 'lastName', 'number', 'roles'];
    const data = await getAllUsersByParams({ searchParams });

    if (!data) {
        throw new Error('Щось пішло не так, юзери не знайдени');
    }

    const { users, count, totalPages } = data;
    if (!users) {
        throw new Error('Щось пішло не так, юзери не знайдени');
    }
    const filteredUsers = getDataFields(users, userFields) as Partial<IUser>[];

    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeadCell>id</TableHeadCell>
                        <TableHeadCell>email</TableHeadCell>
                        <TableHeadCell>{"Ім'я"}</TableHeadCell>
                        <TableHeadCell>Фамілія</TableHeadCell>
                        <TableHeadCell>Телефон</TableHeadCell>
                        <TableHeadCell>Ролі</TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredUsers.length
                        ? filteredUsers.map((user, idx: number) => (
                              <TableRow key={user.id ?? idx}>
                                  <TableCell>{user.id}</TableCell>
                                  <TableCell>{user.email}</TableCell>
                                  <TableCell>{user.name}</TableCell>
                                  <TableCell>{user.lastName}</TableCell>
                                  <TableCell>{user.number}</TableCell>
                                  <TableCell>{user.roles?.length ? getRolesName(user.roles) : null}</TableCell>
                              </TableRow>
                          ))
                        : null}
                </TableBody>
            </Table>
            <Pagination totalPages={totalPages} />
        </>
    );
};

export default UserTable;
