import React from 'react';
import s from './table.module.css';

const Table = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return <table className={s.table}>{children}</table>;
};

export default Table;
