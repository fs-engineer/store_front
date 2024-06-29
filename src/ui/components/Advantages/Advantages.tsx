import React from 'react';
import s from './advantages.module.css';
import { TfiGift } from 'react-icons/tfi';
import { LuListChecks } from 'react-icons/lu';
import { FaPeopleCarry } from 'react-icons/fa';
import { PiChecks } from 'react-icons/pi';

const advantagesFields = [
    {
        name: 'Регулярні знижки',
        icon: <TfiGift />,
    },
    {
        name: 'Професійна косметика',
        icon: <LuListChecks />,
    },
    {
        name: 'Доставка по всій Україні',
        icon: <FaPeopleCarry />,
    },
    {
        name: 'Консультація від спеціаліста',
        icon: <PiChecks />,
    },
];

const Advantages = () => {
    return (
        <section className={s.section}>
            <ul className={s.list}>
                {advantagesFields.map((el) => (
                    <li key={el.name} className={s.item}>
                        {React.cloneElement(el.icon, { className: s.icon })}
                        <p className={s.text}>{el.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Advantages;
