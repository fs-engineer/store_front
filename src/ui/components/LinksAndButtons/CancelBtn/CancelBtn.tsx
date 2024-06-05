import React from 'react';
import clsx from 'clsx';
import s from '../buttons.module.css';

type Props = {
    type: 'submit' | 'button' | 'reset';
    text: string;
    onClick?: () => void;
};

const CancelBtn: React.FC<Props> = ({ type, onClick, text }) => {
    return (
        <button onClick={onClick} className={clsx(s.button, s.cancelBtn)}>
            {text}
        </button>
    );
};

export default CancelBtn;
