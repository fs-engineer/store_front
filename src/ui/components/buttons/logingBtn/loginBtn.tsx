import React from 'react';
import s from '../iconButtons.module.css';
import LoginIcon from '@/ui/components/icons/loginIcon';

interface ILoginBtnProps {
    onToggleModal: () => void;
}

const LoginBtn: React.FC<ILoginBtnProps> = ({ onToggleModal }) => {
    return (
        <button type="button" className={s.button} onClick={onToggleModal}>
            <LoginIcon />
        </button>
    );
};

export default LoginBtn;
