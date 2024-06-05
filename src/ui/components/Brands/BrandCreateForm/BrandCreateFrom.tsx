'use client';

import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CreateBtn, Input, SelectInputWithSearch } from '@/ui/components';
import s from './brandCreateForm.module.css';
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

    const handleFormSubmit = async () => {
        if (!countryId || !brandName) {
            return;
        }

        const brandResponse = await createBrand({ name: brandName, countryId });

        if (brandResponse?.status === 400) {
            toast.error(brandResponse?.message);
        } else if (brandResponse?.id && brandResponse?.name) {
            toast.info(`Бренд ${brandResponse.name} створено`);
        }
    };

    return (
        <form className={s.form}>
            {countries.length > 0 ? (
                <SelectInputWithSearch data={countries} placeholder={'Виберіть країну'} onSelect={setCountryId} />
            ) : null}
            <Input type={'text'} placeholder={'Введіть назву бренду'} getInputValue={setBrandName} />

            <CreateBtn type={'button'} text={'Створити'} onClick={handleFormSubmit} />
            <ToastContainer />
        </form>
    );
};

export default BrandCreateFrom;
