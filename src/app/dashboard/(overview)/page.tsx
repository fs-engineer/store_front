import React from 'react';
import s from './page.module.css';

const Page = async () => {
    return (
        <div className={s.page}>
            <h1 className={s.title}>Dashboard home page</h1>
        </div>
    );
};

export default Page;
