import React from 'react';
import s from '../buttons.module.css';
import { ButtonTypes } from '@/interfaces';

type Props = {
    type: ButtonTypes;
    text: string;
    onClick: () => void;
};

const CreateBtn: React.FC<Props> = ({ type = 'button', text = 'Створити', onClick }) => {
    return (
        <button className={s.button} type={type} onClick={onClick}>
            {text}
        </button>
    );
};

export default CreateBtn;
