import React from 'react';
import { useFormState } from 'react-dom';
import s from './authForm.module.css';
import { authenticate } from '@/app/lib/auth/actions';

// enum FormType {
//     LOGIN = 'login',
//     REGISTER = 'register',
//     PASS_RESET = 'passwordReset',
// }

// useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];

const AuthForm = () => {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);

    return (
        <>
            <h2 className={s.title}>Вхід до особистого кабінету</h2>
            <form className={s.form} action={dispatch}>
                <label htmlFor="email" className={s.label}>
                    E-Mail <span className={s.labelStar}>*</span>
                </label>
                <input className={s.input} type="email" id="email" name="email" placeholder="Введіть e-mail" required />
                <label htmlFor="password" className={s.label}>
                    Пароль <span className={s.labelStar}>*</span>
                </label>
                <input
                    className={s.input}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Введіть пароль"
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
