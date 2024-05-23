import React from 'react';
import s from './table.module.css';

const TableHeadCell = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return <th className={s.thead}>{children}</th>;
};

export default TableHeadCell;
