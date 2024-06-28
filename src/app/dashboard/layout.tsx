import React from 'react';
import Sidebar from '@/ui/components/Dashboard/Sidebar/Sidebar';
import s from './layout.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
