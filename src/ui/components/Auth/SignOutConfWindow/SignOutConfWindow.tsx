import React from 'react';
import { signOut } from 'next-auth/react';
import CancelBtn from '@/ui/components/LinksAndButtons/CancelBtn/CancelBtn';
import SubmitBtn from '@/ui/components/LinksAndButtons/SubmitBtn/SubmitBtn';
import s from './signOutConfWindow.module.css';

type Props = {
    onClose: () => void;
};
const SignOutConfWindow: React.FC<Props> = ({ onClose }) => {
    const handleSignOutWithCloseModal = async () => {
        await signOut();
        onClose();
    };

    return (
        <div className={s.wrapper}>
            <CancelBtn onClick={onClose} type={'button'} text={'Скасувати'} />
            <SubmitBtn type={'button'} text={'Підтвердити'} onClick={handleSignOutWithCloseModal} />
        </div>
    );
};

export default SignOutConfWindow;
