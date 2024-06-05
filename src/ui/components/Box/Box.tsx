import React from 'react';
import s from './box.module.css';

const Box = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return <div className={s.box}>{children}</div>;
};

export default Box;
