'use client';

import React from 'react';
import s from './authForm.module.css';
import { useFormState } from 'react-dom';
import { login } from '@/app/lib/auth/actions';
import Link from 'next/link';
import SubmitBtn from '@/ui/components/ButtonsAndLinks/SubmitBtn/SubmitBtn';

// useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];

const LoginForm = () => {
    const [errorMessage, dispatch] = useFormState(login, undefined);

    return (
        <div className={s.formWrapper}>
            <h2 className={s.title}>Вхід до особистого кабінету</h2>

            <form className={s.form} action={dispatch}>
                <label htmlFor="email" className={s.label}>
                    E-Mail <span className={s.labelStar}>* {errorMessage ? errorMessage : null}</span>
                </label>
                <input className={s.input} type="email" id="email" name="email" placeholder="Введіть e-mail" />
                <label htmlFor="password" className={s.label}>
                    Пароль <span className={s.labelStar}>* {errorMessage ? errorMessage : null}</span>
                </label>
                <input className={s.input} type="password" id="password" name="password" placeholder="Введіть пароль" />

                <SubmitBtn type={'submit'} text={'Увійти'} />
            </form>
            <div className={s.bottomMenuWrap}>
                <p>Забули пароль?</p>
                <Link href={'/register'} className={s.link}>
                    Зареєструватися
                </Link>
            </div>
        </div>
    );
};

export default LoginForm;
