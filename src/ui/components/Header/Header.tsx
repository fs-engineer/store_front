'use client';

import React, { useState } from 'react';
import s from './header.module.css';
import Logo from '@/ui/components/Logo/Logo';
import BurgerBtn from '@/ui/components/ButtonsAndLinks/BurgerBtn/BurgerBtn';
import SearchBtn from '@/ui/components/ButtonsAndLinks/SearchBtn/SearchBtn';
import LoginLink from '@/ui/components/ButtonsAndLinks/LoginLink/LoginLink';
import BasketBtn from '@/ui/components/ButtonsAndLinks/BasketBtn/BasketBtn';
import ProfileBtn from '@/ui/components/ButtonsAndLinks/ProfileBtn/ProfileBtn';
import { useCurrentSession } from '@/hooks/useCurrentSession';
import LogoutBtn from '@/ui/components/ButtonsAndLinks/LogoutBtn/LogoutBtn';
import { Session } from 'next-auth';
import Modal from '@/ui/components/Modal/Modal';
import SignOutConfWindow from '@/ui/components/Auth/SignOutConfWindow/SignOutConfWindow';
import DashboardBtn from '@/ui/components/ButtonsAndLinks/DashboardBtn/DashboardBtn';
import { ROLES } from '@/constants';

const Header = () => {
    const [modal, setModal] = useState(false);
    const { session }: { session: Session | null } = useCurrentSession();
    const roles = session?.user?.roles;
    const isAdmin = roles && Array.isArray(roles) && roles.length > 0 && roles.includes(ROLES.ADMIN);

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
                {isAdmin ? (
                    <div className={s.rightMarginWrap}>
                        <DashboardBtn />
                    </div>
                ) : null}
                <div className={s.rightMarginWrap}>
                    <BasketBtn />
                </div>
                {session?.user?.id ? (
                    <>
                        <ProfileBtn />
                        <LogoutBtn onOpenModal={toggleModal} />
                    </>
                ) : null}
                {!session?.user?.id ? <LoginLink /> : null}
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
