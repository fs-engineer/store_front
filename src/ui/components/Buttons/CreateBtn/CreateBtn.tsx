import React from 'react';
import { IoCreateOutline } from 'react-icons/io5';
import s from '../buttons.module.css';

const CreateBtn = () => {
    return (
        <button className={s.iconBtn}>
            <IoCreateOutline className={s.icon} />
            Створити
        </button>
    );
};

export default CreateBtn;
