import React from 'react';
import s from './table.module.css';

const TableHead = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return <thead className={s.head}>{children}</thead>;
};

export default TableHead;
