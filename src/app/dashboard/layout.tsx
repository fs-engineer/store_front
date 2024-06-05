import React from 'react';
import Sidebar from '@/ui/components/Sidebar/Sidebar';
import s from './layout.module.css';
import { ToastContainer } from 'react-toastify';

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className={s.layout}>
            <h1 className={s.title}>Сторінка адміна</h1>
            <div className={s.wrapper}>
                <Sidebar />
                {children}
            </div>
            <ToastContainer />
        </div>
    );
};

export default Layout;
