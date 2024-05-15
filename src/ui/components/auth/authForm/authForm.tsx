import React, { useState } from 'react';
import s from './authForm.module.css';
import axios from 'axios';

// enum FormType {
//     LOGIN = 'login',
//     REGISTER = 'register',
//     PASS_RESET = 'passwordReset',
// }

// useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];

const AuthForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const token = await axios.post('localhost:5050/auth/login', {
            email,
            password,
        });

        alert(token);
        console.log(token);
    };

    return (
        <>
            <h2 className={s.title}>Вхід до особистого кабінету</h2>
            <form className={s.form} onSubmit={handleSubmit}>
                <label htmlFor="email" className={s.label}>
                    E-Mail <span className={s.labelStar}>*</span>
                </label>
                <input
                    className={s.input}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Введіть e-mail"
                    value={email}
                    onChange={({ target: { value } }): void => setEmail(value)}
                    required
                />
                <label htmlFor="password" className={s.label}>
                    Пароль <span className={s.labelStar}>*</span>
                </label>
                <input
                    className={s.input}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Введіть пароль"
                    value={password}
                    onChange={({ target: { value } }) => setPassword(value)}
                    required
                />
                <button type="submit" className={s.submitBtn}>
                    Увійти
                </button>
            </form>
            <div className={s.bottomMenuWrap}>
                <p>Забули пароль?</p>
                <p>Реєстрація</p>
            </div>
        </>
    );
};

export default AuthForm;
