'use client';

import React, { useEffect, useState } from 'react';
import s from './input.module.css';

type Props = {
    type: string;
    placeholder?: string;
    getInputValue: (value: string) => void;
};

const Input: React.FC<Props> = ({ type = 'text', placeholder = 'Введіть назву', getInputValue }) => {
    const [value, setValue] = useState<string>('');

    useEffect(() => {
        getInputValue(value);
    }, [value, getInputValue]);

    return (
        <input
            className={s.input}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
};

export default Input;
