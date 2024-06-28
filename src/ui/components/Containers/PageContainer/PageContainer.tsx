import React from 'react';
import s from './pageContainer.module.css';

const PageContainer = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return <div className={s.container}>{children}</div>;
};

export default PageContainer;
