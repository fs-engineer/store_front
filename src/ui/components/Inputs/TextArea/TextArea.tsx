'use client';

import React, { useEffect, useState } from 'react';
import s from './textarea.module.css';

type Props = {
    placeholder: string;
    cols?: number;
    rows?: number;
    id?: string;
    name?: string;
    getTextAreaValue: (value: string) => void;
};

const TextArea: React.FC<Props> = ({ placeholder, id, name, cols = 30, rows = 10, getTextAreaValue }) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        getTextAreaValue(value);
    }, [getTextAreaValue, value]);

    return (
        <textarea
            name={name}
            id={id}
            cols={cols}
            rows={rows}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={s.area}
        />
    );
};

export default TextArea;
