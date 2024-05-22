import React from 'react';
import s from './bestsellers.module.css';

const Bestsellers = () => {
    return (
        <section className={s.section}>
            <h2 className={s.title}>
                Наші <span className={s.span}>bestsellers:</span>
            </h2>
        </section>
    );
};

export default Bestsellers;
