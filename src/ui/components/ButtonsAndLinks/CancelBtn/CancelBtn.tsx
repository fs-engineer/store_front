import React from 'react';
import clsx from 'clsx';
import s from '../buttons.module.css';
import { ButtonTypes } from '@/interfaces';

type Props = {
    type: ButtonTypes;
    text: string;
    onClick?: () => void;
};

const CancelBtn: React.FC<Props> = ({ type, onClick, text }) => {
    return (
        <button onClick={onClick} type={type} className={clsx(s.button, s.cancelBtn)}>
            {text}
        </button>
    );
};

export default CancelBtn;
