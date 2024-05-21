import React, { useEffect } from 'react';
import s from './authModal.module.css';
import LoginForm from '@/ui/components/auth/authForm/loginForm';

interface IProps {
    onClose: () => void;
}

const AuthModal: React.FC<IProps> = ({ onClose }) => {
    useEffect(() => {
        function handleEscKey(e: KeyboardEvent) {
            if (e.code === 'Escape') {
                onClose();
            }
        }

        window.addEventListener('keydown', handleEscKey);
        return () => {
            window.removeEventListener('keydown', handleEscKey);
        };
    }, [onClose]);

    const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return (
        <div className={s.overlay} onClick={handleClose}>
            <div className={s.paper}>{<LoginForm />}</div>
        </div>
    );
};

export default AuthModal;
