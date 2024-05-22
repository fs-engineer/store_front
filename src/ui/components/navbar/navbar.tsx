'use client';

import React from 'react';
import s from './navbar.module.css';
import Logo from '@/ui/components/logo/logo';
import BurgerBtn from '@/ui/components/buttons/burgerBtn/burgerBtn';
import SearchBtn from '@/ui/components/buttons/searchBtn/searchBtn';
import LoginBtn from '@/ui/components/buttons/logingBtn/loginBtn';
import BasketBtn from '@/ui/components/buttons/basketBtn/basketBtn';
import ProfileBtn from '@/ui/components/buttons/profileBtn/profileBtn';
import { useCurrentSession } from '@/hooks/useCurrentSession';
import LogoutBtn from '@/ui/components/buttons/logoutBtn/logoutBtn';
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
