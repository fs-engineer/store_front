import React from 'react';
import { GiPlagueDoctorProfile } from 'react-icons/gi';
import Link from 'next/link';
import s from '../buttons.module.css';

const DashboardBtn = () => {
    return (
        <Link href={'/dashboard'} className={s.iconBtn}>
            <GiPlagueDoctorProfile className={s.icon} />
        </Link>
    );
};

export default DashboardBtn;
