import React from 'react';
import s from './table.module.css';

const TableRow = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return <tr className={s.row}>{children}</tr>;
};

export default TableRow;
