import React from 'react';
import { getAllUsers } from '@/app/lib/users/data';
import { ISearchParams, IUser } from '@/interfaces';
import Table from '@/ui/components/Tables/Table/Table';
import TableHead from '@/ui/components/Tables/Table/TableHead';
import TableRow from '@/ui/components/Tables/Table/TableRow';
import TableHeadCell from '@/ui/components/Tables/Table/TableHeadCell';
import TableBody from '@/ui/components/Tables/Table/TableBody';
import TableCell from '@/ui/components/Tables/Table/TableCell';
import { getDataFields } from '@/common/helpers/getDataFields';
import { getRolesName } from '@/common/helpers/getRolesName';

const userFields: string[] = ['id', 'email', 'name', 'lastName', 'number', 'roles'];

const UserTable = async ({ searchParams }: ISearchParams) => {
    const data = await getAllUsers({ searchParams });

    if (!data) {
        console.error('Щось пішло не так, юзери не знайдени');
    }

    const { users, count, totalPages } = data;
    if (!users) {
        console.error('Щось пішло не так, юзери не знайдени');
    }
    const serializedUsers = getDataFields(users, userFields) as Partial<IUser>[];

    return (
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
                {serializedUsers.length
                    ? serializedUsers.map((user, idx: number) => (
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
    );
};

export default UserTable;
