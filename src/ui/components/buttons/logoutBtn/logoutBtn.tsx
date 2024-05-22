import React from 'react';
import LoginIcon from '@/ui/components/icons/loginIcon';
import s from '../iconButtons.module.css';
import { signOut } from 'next-auth/react';

const LogoutBtn = () => {
    return (
        <button className={s.button} onClick={() => signOut()}>
            <LoginIcon width={24} height={24} />
        </button>
    );
};

export default LogoutBtn;
