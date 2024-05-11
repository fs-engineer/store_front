import React from 'react';
import s from './authForm.module.css';

const AuthForm = () => {
    return (
        <form className={s.form}>
            <label htmlFor="email">E-Mail</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="password">Пароль</label>
            <input type="password" id="password" name="password" />
            <button type="submit">Увійти</button>
        </form>
    );
};

export default AuthForm;
