import React from 'react';
import s from '../buttons.module.css';
import { SiIconfinder } from 'react-icons/si';

const SearchBtn: React.FC = () => {
    return (
        <button type="button" className={s.iconBtn}>
            <SiIconfinder className={s.icon} />
        </button>
    );
};

export default SearchBtn;
