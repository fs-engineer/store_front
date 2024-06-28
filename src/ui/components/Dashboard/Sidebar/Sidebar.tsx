import React from 'react';
import s from './sidebar.module.css';
import Logo from '@/ui/components/Logo/Logo';
import NavLinks from '@/ui/components/Dashboard/NavLinks/NavLinks';

const Sidebar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.logoBlock}>
                <Logo />
            </div>
            <NavLinks />
            <div className={s.emptyPanel}></div>
        </nav>
    );
};

export default Sidebar;
