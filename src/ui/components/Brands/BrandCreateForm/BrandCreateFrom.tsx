'use client';

import React, { useState } from 'react';
import SelectInputWithSearch from '@/ui/components/Inputs/SelectInputWithSearch';
import CreateLink from '@/ui/components/LinksAndButtons/CreateLink/CreateLink';

type BrandsProps = {
    countries: {
        id: number;
        name: string;
    }[];
};

const BrandCreateFrom: React.FC<BrandsProps> = ({ countries }) => {
    const [brandId, setBrandId] = useState<null | number>(null);

    console.log(brandId);
    return (
        <form>
            {countries.length > 0 ? (
                <SelectInputWithSearch data={countries} placeholder={'Виберіть країну'} onSelect={setBrandId} />
            ) : null}
            <button>Створити</button>
        </form>
    );
};

export default BrandCreateFrom;
