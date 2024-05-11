import React from 'react';
import s from './burgerBtn.module.css';

interface IBurgerBtnProps {
    onToggleModal: () => void;
}

const BurgerBtn: React.FC<IBurgerBtnProps> = ({ onToggleModal }) => {
    return (
        <button type="button" className={s.hamburger} onClick={onToggleModal}>
            <div className={s.line}></div>
            <div className={s.line}></div>
            <div className={s.line}></div>
        </button>
    );
};

export default BurgerBtn;
