'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, CreateBtn, Input, SelectInputWithSearch } from '@/ui/components';
import s from './brandCreateForm.module.css';
import { useRouter } from 'next/navigation';
import { createBrand } from '@/app/lib/brands/actions';

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

    const handleFormSubmit = async () => {
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
        router.push('/dashboard/brands');
    };

    return (
        <form className={s.form}>
            <Box>
                {countries.length > 0 ? (
                    <SelectInputWithSearch data={countries} placeholder={'Виберіть країну'} onSelect={setCountryId} />
                ) : null}
            </Box>
            <Box>
                <Input type={'text'} placeholder={'Введіть назву бренду'} getInputValue={setBrandName} />
            </Box>

            <Box>
                <CreateBtn type={'button'} text={'Створити'} onClick={handleFormSubmit} />
            </Box>
        </form>
    );
};

export default BrandCreateFrom;
