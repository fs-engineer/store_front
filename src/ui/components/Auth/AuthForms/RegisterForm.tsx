import React from 'react';
import s from '@/ui/components/Auth/AuthForms/authForm.module.css';
import Link from 'next/link';
import SubmitBtn from '@/ui/components/LinksAndButtons/SubmitBtn/SubmitBtn';

const RegisterForm = () => {
    return (
        <div className={s.formWrapper}>
            <h2 className={s.title}>Реєстрація</h2>

            <form className={s.form}>
                <label htmlFor="email" className={s.label}>
                    E-Mail <span className={s.labelStar}>*</span>
                </label>
                <input className={s.input} type="email" id="email" name="email" placeholder="Введіть e-mail" required />
                <label htmlFor="newPassword" className={s.label}>
                    Пароль <span className={s.labelStar}>*</span>
                </label>
                <input
                    className={s.input}
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    placeholder="Введіть пароль"
                    required
                />
                <input
                    className={s.input}
                    type="password"
                    id="newPasswordConf"
                    name="newPasswordConf"
                    placeholder="Підтвердіть пароль"
                    required
                />
                <SubmitBtn text={'Зареєструватися'} type={'submit'} />
            </form>
            <div className={s.bottomMenuWrap}>
                <p>Забули пароль?</p>
                <Link href={'/login'} className={s.link}>
                    Увійти
                </Link>
            </div>
        </div>
    );
};

export default RegisterForm;
