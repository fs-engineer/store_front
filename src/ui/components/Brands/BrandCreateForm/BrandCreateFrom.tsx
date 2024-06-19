'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Box, CreateBtn, Form, Input, SelectInputWithSearch } from '@/ui/components';
import { useRouter } from 'next/navigation';
import { createBrand } from '@/app/lib/brands/actions';
import useCurrentPage from '@/hooks/useCurrentPage';
import { brandsKey, dashboardKey, productsKey } from '@/constants';

type BrandsProps = {
    countries: {
        id: number;
        name: string;
    }[];
};

const BrandCreateFrom: React.FC<BrandsProps> = ({ countries }) => {
    const [countryId, setCountryId] = useState<null | number>(null);
    const [brandName, setBrandName] = useState<null | string>(null);
    const router = useRouter();
    const currentPage = useCurrentPage();

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!countryId || !brandName) {
            toast.error('Не вірно введені данні');
            return;
        }

        const brandResponse = await createBrand({ name: brandName, countryId });

        if (brandResponse?.status === 400) {
            toast.error(brandResponse?.message);
            return;
        } else if (brandResponse?.id && brandResponse?.name) {
            toast.info(`Бренд ${brandResponse.name} створено`);
        }
        router.push(`/${dashboardKey}/${productsKey}/${brandsKey}?page=${currentPage}`);
    };

    return (
        <Form onSubmit={handleFormSubmit}>
            <Box>
                {countries.length > 0 ? (
                    <SelectInputWithSearch data={countries} placeholder={'Виберіть країну'} onSelect={setCountryId} />
                ) : null}
            </Box>
            <Box>
                <Input
                    name={'brandName'}
                    type={'text'}
                    placeholder={'Введіть назву бренду'}
                    getInputValue={setBrandName}
                />
            </Box>
            <Box>
                <CreateBtn type={'submit'} text={'Створити'} />
            </Box>
        </Form>
    );
};

export default BrandCreateFrom;
