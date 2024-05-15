'use Client';

import React, { useState } from 'react';
import s from './navbar.module.css';
import Logo from '@/ui/components/logo/logo';
import BurgerBtn from '@/ui/components/buttons/burgerBtn/burgerBtn';
import SearchBtn from '@/ui/components/buttons/searchBtn/searchBtn';
import LoginBtn from '@/ui/components/buttons/logingBtn/loginBtn';
import BasketBtn from '@/ui/components/buttons/basketBtn/basketBtn';
import AuthModal from '@/ui/components/auth/authModal/authModal';

function Navbar() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal((modal) => !modal);
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
                    <LoginBtn onToggleModal={toggleModal} />
                </div>
                <BasketBtn />
            </header>

            {modal ? <AuthModal onClose={toggleModal} /> : null}
        </>
    );
}

export default Navbar;
