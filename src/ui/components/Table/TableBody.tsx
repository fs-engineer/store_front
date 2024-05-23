import React from 'react';
import s from './table.module.css';

const TableBody = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return <tbody className={s.tbody}>{children}</tbody>;
};

export default TableBody;
