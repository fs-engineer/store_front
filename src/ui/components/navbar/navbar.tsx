import React from 'react';
import s from './navbar.module.css';
import Logo from '@/ui/components/logo/logo';
import BurgerBtn from '@/ui/components/buttons/burgerBtn/burgerBtn';
import SearchBtn from '@/ui/components/buttons/searchBtn/searchBtn';

function Navbar() {
    return (
        <header className={s.footer}>
            <BurgerBtn />
            <SearchBtn />
            <Logo />
        </header>
    );
}

export default Navbar;
