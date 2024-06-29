'use client';

import React, { useState } from 'react';
import s from './accordion.module.css';
import { IoIosArrowDown } from 'react-icons/io';
import clsx from 'clsx';

const Accordion = ({ children, title = 'some value' }: Readonly<{ children: React.ReactNode; title: string }>) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={s.accordion} onClick={() => setIsOpen((prevState) => !prevState)}>
            <div className={s.titleWrapper}>
                <p className={s.title}>{title}</p>
                <IoIosArrowDown className={clsx(s.icon, { [s.iconUp]: isOpen })} />
            </div>
            {isOpen ? <div className={s.childrenWrap}> {children} </div> : null}
        </div>
    );
};

export default Accordion;
