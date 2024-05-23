import React from 'react';
import s from './container.module.css';

const Container = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return <div className={s.container}>{children}</div>;
};

export default Container;
