'use client';

import React, { FormEvent, useState } from 'react';
import { Box, CreateBtn, Form, Input } from '@/ui/components';
import { toast } from 'react-toastify';
import { createHairType } from '@/app/lib/hairTypes/actions';
import { dashboardKey, hairTypesKey, productsKey } from '@/constants';
import { useRouter } from 'next/navigation';
import useCurrentPage from '@/hooks/useCurrentPage';

const HairTypesCreateForm = () => {
    const [hairTypeName, setHairTypeName] = useState('');
    const router = useRouter();
    const currentPage = useCurrentPage();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!hairTypeName) {
            toast.error('Назва не має бути пустою і має бути більше трьох символів');
            return;
        }

        const response = await createHairType({ name: hairTypeName });

        if (response?.status === 400) {
            toast.error(response?.message);
            return;
        } else if (response?.id && response?.name) {
            toast.info(`Тип волосся ${response.name} створено`);
        }
        router.push(`/${dashboardKey}/${productsKey}/${hairTypesKey}?page=${currentPage}`);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Box>
                <Input type={'text'} getInputValue={setHairTypeName} />
            </Box>
            <Box>
                <CreateBtn type={'submit'} text={'Створити'} />
            </Box>
        </Form>
    );
};
export default HairTypesCreateForm;
