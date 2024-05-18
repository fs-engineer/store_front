import React from 'react';
import BasketIcon from '@/ui/components/icons/basketIcon';
import s from '../iconButtons.module.css';

const BasketBtn = () => {
    return (
        <button type="button" className={s.button}>
            <BasketIcon width={22} height={27} />
        </button>
    );
};

export default BasketBtn;
