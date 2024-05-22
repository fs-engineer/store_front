'use client';

import React from 'react';
import s from './Navbar.module.css';
import Logo from '@/ui/components/logo/Logo';
import BurgerBtn from '@/ui/components/buttons/burgerBtn/BurgerBtn';
import SearchBtn from '@/ui/components/buttons/searchBtn/SearchBtn';
import LoginBtn from '@/ui/components/buttons/logingBtn/LoginBtn';
import BasketBtn from '@/ui/components/buttons/basketBtn/BasketBtn';
import ProfileBtn from '@/ui/components/buttons/profileBtn/ProfileBtn';
import { useCurrentSession } from '@/hooks/useCurrentSession';
import LogoutBtn from '@/ui/components/buttons/logoutBtn/LogoutBtn';
import { Session } from 'next-auth';

const Navbar = () => {
    const { session }: { session: Session | null } = useCurrentSession();

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
                        <LogoutBtn />
                    </>
                ) : null}
                {!session?.user?.id ? <LoginBtn /> : null}
            </header>
        </>
    );
};

export default Navbar;
