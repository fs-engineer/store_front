'use client';

import React, { useState } from 'react';
import s from './header.module.css';
import Logo from '@/ui/components/Logo/Logo';
import BurgerBtn from '@/ui/components/Buttons/BurgerBtn/BurgerBtn';
import SearchBtn from '@/ui/components/Buttons/SearchBtn/SearchBtn';
import LoginBtn from '@/ui/components/Buttons/LoginBtn/LoginBtn';
import BasketBtn from '@/ui/components/Buttons/BasketBtn/BasketBtn';
import ProfileBtn from '@/ui/components/Buttons/ProfileBtn/ProfileBtn';
import { useCurrentSession } from '@/hooks/useCurrentSession';
import LogoutBtn from '@/ui/components/Buttons/LogoutBtn/LogoutBtn';
import { Session } from 'next-auth';
import Modal from '@/ui/components/Modal/Modal';
import SignOutConfWindow from '@/ui/components/Auth/SignOutConfWindow/SignOutConfWindow';

const Header = () => {
    const [modal, setModal] = useState(false);
    const { session }: { session: Session | null } = useCurrentSession();

    const toggleModal = () => {
        setModal((prevState) => !prevState);
    };

    return (
        <>
            <header className={s.header}>
                <div className={s.rightMarginWrap}>
                    <BurgerBtn />
                </div>
                <SearchBtn />
                <div className={s.logoWrap}>
                    <Logo />
                </div>
                <div className={s.rightMarginWrap}>
                    <BasketBtn />
                </div>
                {session?.user?.id ? (
                    <>
                        <ProfileBtn />
                        <LogoutBtn onOpenModal={toggleModal} />
                    </>
                ) : null}
                {!session?.user?.id ? <LoginBtn /> : null}
            </header>

            {modal ? (
                <Modal onClose={toggleModal}>
                    <SignOutConfWindow onClose={toggleModal} />
                </Modal>
            ) : null}
        </>
    );
};

export default Header;
