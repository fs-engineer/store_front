import React, { useEffect } from 'react';
import s from './modal.module.css';

interface IProps {
    onClose: () => void;
    children: React.ReactElement;
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
            <div className={s.paper}>{React.cloneElement(children, { onClose })}</div>
        </div>
    );
};

export default Modal;
