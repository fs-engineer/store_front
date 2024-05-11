import React, { useEffect } from 'react';
import s from './authModal.module.css';
import AuthForm from '@/ui/components/auth/authForm/authForm';

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
            <div className={s.paper}>{<AuthForm />}</div>
        </div>
    );
};

export default AuthModal;
