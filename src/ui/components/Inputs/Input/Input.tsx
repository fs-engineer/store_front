'use client';

import React, { useEffect, useState } from 'react';
import s from './input.module.css';

type Props = {
    name: string;
    type: string;
    placeholder?: string;
    getInputValue: (value: string) => void;
};

const Input: React.FC<Props> = ({ name, type = 'text', placeholder = 'Введіть назву', getInputValue }) => {
    const [value, setValue] = useState<string>('');

    useEffect(() => {
        getInputValue(value);
    }, [value, getInputValue]);

    return (
        <input
            name={name}
            className={s.input}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value.trim())}
        />
    );
};

export default Input;
