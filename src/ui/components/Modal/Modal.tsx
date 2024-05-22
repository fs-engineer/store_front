import React, { useEffect } from 'react';
import s from './Modal.module.css';

interface IProps {
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<IProps> = ({ onClose, children }) => {
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
            <div className={s.paper}>{children}</div>
        </div>
    );
};

export default Modal;
