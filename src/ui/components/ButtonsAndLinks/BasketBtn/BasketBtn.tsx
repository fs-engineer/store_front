import React from 'react';
import s from '../buttons.module.css';
import { FaOpencart } from 'react-icons/fa6';

const BasketBtn = () => {
    return (
        <button type="button" className={s.iconBtn}>
            <FaOpencart className={s.icon} />
        </button>
    );
};

export default BasketBtn;
