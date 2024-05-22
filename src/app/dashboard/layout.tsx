import React from 'react';
import Sidebar from '@/ui/components/Sidebar/Sidebar';
import s from './layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={s.layout}>
            <h1 className={s.title}>Dashboard</h1>
            <div className={s.wrapper}>
                <Sidebar />
                {children}
            </div>
        </div>
    );
};

export default Layout;
