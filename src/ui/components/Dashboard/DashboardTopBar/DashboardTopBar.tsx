import React from 'react';
import s from './dashboardTopBar.module.css';

const DashboardTopBar = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <nav className={s.nav}>
            <div className={s.freeSpace}></div>
            <div className={s.freeSpace}></div>
            <div className={s.freeSpace}></div>
            {children}
        </nav>
    );
};

export default DashboardTopBar;
