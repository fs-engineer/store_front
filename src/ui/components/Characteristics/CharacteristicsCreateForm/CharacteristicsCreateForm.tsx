'use client';

import React, { useState } from 'react';
import TextArea from '@/ui/components/Inputs/TextArea/TextArea';
import { Box, CreateBtn, Form } from '@/ui/components';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import useCurrentPage from '@/hooks/useCurrentPage';
import { createCharacteristic } from '@/app/lib/characteristics/actions';
import { characteristicsKey, dashboardKey } from '@/constants';

const CharacteristicsCreateForm = () => {
    const [characterValue, setCharacterValue] = useState('');
    const router = useRouter();
    const currentPage = useCurrentPage();

    const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!characterValue) {
            toast.error('Введіть данні. Має будти білше 5 або менше 100 символів');
            return;
        }

        const response = await createCharacteristic({ value: characterValue });

        if (response?.status === 400) {
            toast.error(response?.message);
            return;
        } else if (response?.id && response?.name) {
            toast.info(`Бренд ${response.name} створено`);
        }

        router.push(`/${dashboardKey}/${characteristicsKey}?page=${currentPage}`);
    };

    return (
        <Form onSubmit={handleSubmitForm}>
            <Box>
                <TextArea placeholder={'Введіть назву характеристики'} getTextAreaValue={setCharacterValue} />
            </Box>
            <Box>
                <CreateBtn type={'submit'} text={'Створити'} />
            </Box>
        </Form>
    );
};

export default CharacteristicsCreateForm;
