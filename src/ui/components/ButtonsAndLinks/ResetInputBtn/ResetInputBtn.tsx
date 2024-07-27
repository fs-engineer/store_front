import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import s from '../buttons.module.css';
import clsx from 'clsx';

type Props = {
    text?: string;
    onClick: () => void;
};

const ResetInputBtn: React.FC<Props> = ({ text, onClick }) => {
    return (
        <button className={s.resetBtn} type="button" onClick={onClick}>
            {text ? text : null}
            {!text ? <RiCloseFill className={clsx(s.icon, s.darkIcon)} /> : null}
        </button>
    );
};

export default ResetInputBtn;
