'use client';

import React, { ChangeEvent, useState } from 'react';
import s from './select.module.css';

type Props = {
    options: string[] | number[];
    getValue: (value: string | number) => void;
    defaultValue?: number | string;
};

const Select: React.FC<Props> = ({ defaultValue = 1, options = [], getValue }) => {
    const [value, setValue] = useState(defaultValue);

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
        getValue(e.target.value);
    };

    return (
        <select value={value} onChange={handleSelectChange} className={s.select}>
            <option value=""></option>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Select;
