'use client';

import React, { useState } from 'react';
import s from './header.module.css';
import Logo from '@/ui/components/Logo/Logo';
import BurgerBtn from '@/ui/components/LinksAndButtons/BurgerBtn/BurgerBtn';
import SearchBtn from '@/ui/components/LinksAndButtons/SearchBtn/SearchBtn';
import LoginLink from '@/ui/components/LinksAndButtons/LoginLink/LoginLink';
import BasketBtn from '@/ui/components/LinksAndButtons/BasketBtn/BasketBtn';
import ProfileBtn from '@/ui/components/LinksAndButtons/ProfileBtn/ProfileBtn';
import { useCurrentSession } from '@/hooks/useCurrentSession';
import LogoutBtn from '@/ui/components/LinksAndButtons/LogoutBtn/LogoutBtn';
import { Session } from 'next-auth';
import Modal from '@/ui/components/Modal/Modal';
import SignOutConfWindow from '@/ui/components/Auth/SignOutConfWindow/SignOutConfWindow';
import DashboardBtn from '@/ui/components/LinksAndButtons/DashboardBtn/DashboardBtn';
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
                <div className={s.rightMarginWrap}>
                    <BasketBtn />
                </div>
                {isAdmin ? <DashboardBtn /> : null}
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
