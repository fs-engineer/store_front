import React from 'react'
import s from './burgerBtn.module.css'

const BurgerBtn: React.FC = () => {
    return (
        <button type="button" className={s.hamburger}>
            <div className={s.line}></div>
            <div className={s.line}></div>
            <div className={s.line}></div>
        </button>
    )
}

export default BurgerBtn
