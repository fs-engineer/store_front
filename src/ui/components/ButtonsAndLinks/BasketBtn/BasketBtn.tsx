import React from 'react';
import s from '../buttons.module.css';
import { FaOpencart } from 'react-icons/fa6';
import Link from 'next/link';

const BasketBtn = () => {
    return (
        <Link href={`/checkout`} type="button" className={s.iconBtn}>
            <FaOpencart className={s.icon} />
        </Link>
    );
};

export default BasketBtn;
