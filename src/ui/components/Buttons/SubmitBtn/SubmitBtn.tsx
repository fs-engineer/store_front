import React from 'react';
import s from '../buttons.module.css';

type Props = {
    onClick?: () => void;
    type: 'submit' | 'reset' | 'button';
    text: string;
};

const SubmitBtn: React.FC<Props> = ({ type, onClick, text }) => {
    return (
        <button type={type} onClick={onClick} className={s.button}>
            {text}
        </button>
    );
};

export default SubmitBtn;
