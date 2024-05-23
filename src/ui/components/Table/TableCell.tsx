import React from 'react';
import s from './table.module.css';

const TableCell = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return <td className={s.tCell}>{children}</td>;
};

export default TableCell;
