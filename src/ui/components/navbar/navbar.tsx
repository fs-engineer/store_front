import React from 'react'
import s from './navbar.module.css'
import Logo from '@/ui/components/buttons/logo/logo'
import BurgerBtn from '@/ui/components/buttons/burgerBtn/burgerBtn'

function Navbar() {
    return (
        <header className={s.footer}>
            <BurgerBtn />
            <Logo />
        </header>
    )
}

export default Navbar
