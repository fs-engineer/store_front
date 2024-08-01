'use client';

import React from 'react';
import s from './header.module.css';
import Logo from '@/ui/components/Logo/Logo';
import BurgerBtn from '@/ui/components/ButtonsAndLinks/BurgerBtn/BurgerBtn';
import { aboutKey, contactsKey, deliveryKey, productsKey } from '@/constants';
import MainMenu from '@/ui/components/Menu/MainMenu/MainMenu';
import useWindowSize from '@/hooks/useWindowSize';
import TopBarIconButtons from '@/ui/components/Menu/TopBarIconButtons/TopBarIconButtons';

const Header = () => {
    const { width } = useWindowSize();

    const mainMenuItems = [
        { name: productsKey, value: 'Товари', href: `/${productsKey}` },
        { name: deliveryKey, value: 'Доставка та оплата', href: `/${deliveryKey}` },
        { name: contactsKey, value: 'Контакти', href: `/${contactsKey}` },
        { name: aboutKey, value: 'Про нас', href: `/${aboutKey}` },
    ];

    return (
        <>
            <header className={s.header}>
                {width && width < 600 ? (
                    <div className={s.rightMarginWrap}>
                        <BurgerBtn />
                    </div>
                ) : null}
                {/*<SearchBtn />*/}
                <div className={s.logoWrap}>
                    <Logo />
                </div>
                {width && width > 600 ? <MainMenu items={mainMenuItems} /> : null}
                <TopBarIconButtons />
            </header>
        </>
    );
};

export default Header;
