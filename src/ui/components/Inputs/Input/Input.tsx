'use client';

import React from 'react';
import s from './input.module.css';

type Props = {
    name: string;
    type: string;
    placeholder?: string;
    getValue: (value: string) => void;
    autoComplete?: 'on' | 'off';
    value: string | number;
};

const Input: React.FC<Props> = ({
    name,
    type = 'text',
    placeholder = 'Введіть назву',
    getValue,
    autoComplete = 'off',
    value,
}) => {
    return (
        <input
            name={name}
            className={s.input}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => getValue(e.target.value)}
            autoComplete={autoComplete}
        />
    );
};

export default Input;
