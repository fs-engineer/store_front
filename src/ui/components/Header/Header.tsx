import React from 'react';
import s from './header.module.css';
import Logo from '@/ui/components/Logo/Logo';
import { aboutKey, contactsKey, deliveryKey, productsKey } from '@/constants';
import MainMenu from '@/ui/components/Menu/MainMenu/MainMenu';
import TopBarIconButtons from '@/ui/components/Menu/TopBarIconButtons/TopBarIconButtons';
import MainMenuMobile from '@/ui/components/Menu/MainMenuMobile/MainMenuMobile';

const Header = () => {
    const mainMenuItems = [
        { name: productsKey, value: 'Товари', href: `/${productsKey}` },
        { name: deliveryKey, value: 'Доставка та оплата', href: `/${deliveryKey}` },
        { name: contactsKey, value: 'Контакти', href: `/${contactsKey}` },
        { name: aboutKey, value: 'Про нас', href: `/${aboutKey}` },
    ];

    return (
        <>
            <header className={s.header}>
                <MainMenuMobile />
                {/*<SearchBtn />*/}
                <div className={s.logoWrap}>
                    <Logo />
                </div>
                <MainMenu items={mainMenuItems} />
                <TopBarIconButtons />
            </header>
        </>
    );
};

export default Header;
