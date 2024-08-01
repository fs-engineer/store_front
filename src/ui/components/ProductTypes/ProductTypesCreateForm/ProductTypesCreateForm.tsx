'use client';

import React, { useState } from 'react';
import { Box, CreateBtn, Form, Input } from '@/ui/components';
import { toast } from 'react-toastify';
import { createProductType } from '@/app/lib/productTypes/actions';
import { useRouter } from 'next/navigation';
import useCurrentPage from '@/hooks/useCurrentPage';
import { dashboardKey, productsKey, productTypesKey } from '@/constants';

const ProductTypesCreateForm = () => {
    const [typeName, setTypeName] = useState('');
    const router = useRouter();
    const currentPage = useCurrentPage();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!typeName) {
            toast.error('Назва не має бути пустою і має бути більше трьох символів');
            return;
        }

        const response = await createProductType({ name: typeName });

        if (response?.status === 400) {
            toast.error(response?.message);
            return;
        } else if (response?.id && response?.name) {
            toast.info(`Тип продукту ${response.name} створено`);
        }
        router.push(`/${dashboardKey}/${productsKey}/${productTypesKey}?page=${currentPage}`);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Box>
                <Input type={'text'} name={'typeName'} value={typeName} getValue={setTypeName} />
            </Box>
            <Box>
                <CreateBtn type={'submit'} text={'Створити'} />
            </Box>
        </Form>
    );
};

export default ProductTypesCreateForm;
