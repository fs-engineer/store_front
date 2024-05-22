import React from 'react';
import LoginIcon from '@/ui/components/Icons/LoginIcon';
import s from '../iconButtons.module.css';

type Props = {
    onOpenModal: () => void;
};

const LogoutBtn: React.FC<Props> = ({ onOpenModal }) => {
    return (
        <button className={s.button} onClick={onOpenModal}>
            <LoginIcon width={24} height={24} />
        </button>
    );
};

export default LogoutBtn;
