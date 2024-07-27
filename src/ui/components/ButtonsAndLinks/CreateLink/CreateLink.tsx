import React from 'react';
import { IoCreateOutline } from 'react-icons/io5';
import s from '../buttons.module.css';
import Link from 'next/link';
import clsx from 'clsx';

type Props = {
    path: string;
};
const CreateLink: React.FC<Props> = ({ path }) => {
    return (
        <Link href={path} className={s.button}>
            <IoCreateOutline className={clsx(s.icon, s.iconText)} />
            Створити
        </Link>
    );
};

export default CreateLink;
