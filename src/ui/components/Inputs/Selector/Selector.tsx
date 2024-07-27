'use client';

import React, { ChangeEvent, useState } from 'react';
import s from './selector.module.css';

type Props = {
    options: string[] | number[];
    getValue: (value: string | number) => void;
    defaultValue?: number | string;
};

const Selector: React.FC<Props> = ({ defaultValue = 1, options = [], getValue }) => {
    const [value, setValue] = useState('');

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
        getValue(e.target.value);
    };

    return (
        <div className={s.wrap}>
            <select value={value} onChange={handleSelectChange} className={s.select}>
                <option value={defaultValue} disabled></option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Selector;
