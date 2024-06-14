'use client';

import React, { useEffect, useState } from 'react';
import { IProduct, IProps } from '@/interfaces';
import { Pagination, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '@/ui/components';
import { getAllProductsByParams } from '@/app/lib/products/data';
import { getDataFields } from '@/common/helpers/getDataFields';

const ProductsTable: React.FC<IProps> = ({ searchParams }) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const page = searchParams?.page || 1;

    useEffect(() => {
        const fields = ['id', 'name', 'price'];

        const fetchProducts = async () => {
            const data = await getAllProductsByParams({ searchParams });

            if (!data) {
                throw new Error('Щось пішло не так з цими продуктами!');
            }

            const { rows, count, totalPages } = data;
            if (!rows) {
                throw new Error('Щось пішло не так з цими продуктами!');
            }

            const filteredProducts = getDataFields(rows, fields) as IProduct[];

            setTotalPages(totalPages);
            setProducts(filteredProducts);
        };

        fetchProducts();
    }, [page, searchParams]);

    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeadCell>id</TableHeadCell>
                        <TableHeadCell>Назва</TableHeadCell>
                        <TableHeadCell>Ціна</TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.length
                        ? products.map((brand) => (
                              <TableRow key={brand?.id}>
                                  <TableCell>{brand?.id}</TableCell>
                                  <TableCell>{brand?.name}</TableCell>
                                  <TableCell>{brand?.price} грн</TableCell>
                              </TableRow>
                          ))
                        : null}
                </TableBody>
            </Table>
            <Pagination totalPages={totalPages} />
        </>
    );
};

export default ProductsTable;
