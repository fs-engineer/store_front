import React from 'react';
import s from '../buttons.module.css';
import { GiPlagueDoctorProfile } from 'react-icons/gi';

const ProfileBtn = () => {
    return (
        <button type="button" className={s.iconBtn}>
            <GiPlagueDoctorProfile className={s.icon} />
        </button>
    );
};

export default ProfileBtn;
