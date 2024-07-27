import React from 'react';
import s from '../buttons.module.css';
import { GiEgyptianProfile } from 'react-icons/gi';

const ProfileBtn = () => {
    return (
        <button type="button" className={s.iconBtn}>
            <GiEgyptianProfile className={s.icon} />
        </button>
    );
};

export default ProfileBtn;
