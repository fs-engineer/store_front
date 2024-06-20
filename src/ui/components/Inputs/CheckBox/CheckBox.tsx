'use client';

import React, { useEffect, useId, useState } from 'react';
import { IoCheckmarkDoneOutline } from 'react-icons/io5';

import s from './checkBox.module.css';

type Props = {
    name: string;
    placeholder: string;
    onGetValue: (value: boolean) => void;
};
const CheckBox: React.FC<Props> = ({ name, placeholder = 'is checked', onGetValue }) => {
    const [checked, setChecked] = useState(false);
    const id = useId();

    useEffect(() => {
        onGetValue(checked);
    }, [checked, onGetValue]);

    const toggleInput = () => {
        setChecked((prevState) => !prevState);
    };
    return (
        <div className={s.container}>
            <label htmlFor={id} className={s.label}>
                {placeholder}
                <input
                    className={s.input}
                    name={name}
                    type="checkbox"
                    id={id}
                    checked={checked}
                    onChange={toggleInput}
                />
            </label>
            <div className={s.box} onClick={toggleInput}>
                {checked ? <IoCheckmarkDoneOutline className={s.icon} /> : null}
            </div>
        </div>
    );
};

export default CheckBox;
