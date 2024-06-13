import React from 'react';
import s from './form.module.css';

type Props = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
};

const Form: React.FC<Props> = ({ children, onSubmit }) => {
    return (
        <form className={s.form} onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export default Form;
