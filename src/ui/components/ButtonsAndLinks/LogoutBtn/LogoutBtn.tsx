import React from 'react';
import s from '../buttons.module.css';
import { PiSignIn } from 'react-icons/pi';

type Props = {
    onOpenModal: () => void;
};

const LogoutBtn: React.FC<Props> = ({ onOpenModal }) => {
    return (
        <button className={s.iconBtn} onClick={onOpenModal}>
            <PiSignIn className={s.icon} />
        </button>
    );
};

export default LogoutBtn;
