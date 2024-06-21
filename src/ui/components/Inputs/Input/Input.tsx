'use client';

import React, { useEffect, useState } from 'react';
import s from './input.module.css';

type Props = {
    name: string;
    type: string;
    placeholder?: string;
    getInputValue: (value: string) => void;
    autoComplete?: 'on' | 'off';
};

const Input: React.FC<Props> = ({
    name,
    type = 'text',
    placeholder = 'Введіть назву',
    getInputValue,
    autoComplete = 'off',
}) => {
    const [value, setValue] = useState<string>('');

    useEffect(() => {
        getInputValue(value.trim());
    }, [value, getInputValue]);

    return (
        <input
            name={name}
            className={s.input}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoComplete={autoComplete}
        />
    );
};

export default Input;
