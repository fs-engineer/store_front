'use client';

import React, { useEffect, useState } from 'react';
import s from './productList.module.css';
import { IProduct, IProps } from '@/interfaces';
import { getAllProductsByParams } from '@/app/lib/products/data';
import { getDataFields } from '@/common/helpers/getDataFields';
import { Pagination } from '@/ui/components';
import ProductCard from '@/ui/components/Tables/ProductCard/ProductCard';

const ProductsList: React.FC<IProps> = ({ searchParams }) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            const fields = ['id', 'name', 'price', 'images', 'types'];
            const data = await getAllProductsByParams({ searchParams });

            if (!data) {
                throw new Error('Щось пішло не так з цими продуктами!');
            }

            const { rows, totalPages } = data;
            if (!rows) {
                throw new Error('Щось пішло не так з цими продуктами!');
            }

            const filteredProducts = getDataFields(rows, fields) as IProduct[];

            setTotalPages(totalPages);
            setProducts(filteredProducts);
        };

        fetchProducts();
    }, [searchParams]);

    return (
        <>
            <ul className={s.list}>
                <ProductCard products={products} imgWidth={185} imgHeight={335} />
            </ul>
            {products.length ? <Pagination totalPages={totalPages} /> : null}
        </>
    );
};

export default ProductsList;
