'use client';

import React, { useState } from 'react';
import DashboardBtn from '@/ui/components/ButtonsAndLinks/DashboardBtn/DashboardBtn';
import BasketBtn from '@/ui/components/ButtonsAndLinks/BasketBtn/BasketBtn';
import ProfileBtn from '@/ui/components/ButtonsAndLinks/ProfileBtn/ProfileBtn';
import LogoutBtn from '@/ui/components/ButtonsAndLinks/LogoutBtn/LogoutBtn';
import LoginLink from '@/ui/components/ButtonsAndLinks/LoginLink/LoginLink';
import { ROLES } from '@/constants';
import { Session } from 'next-auth';
import { useCurrentSession } from '@/hooks/useCurrentSession';
import Modal from '@/ui/components/Modal/Modal';
import SignOutConfWindow from '@/ui/components/Auth/SignOutConfWindow/SignOutConfWindow';

import s from './topBarIconButtons.module.css';

const TopBarIconButtons = () => {
    const [modal, setModal] = useState(false);

    const { session }: { session: Session | null } = useCurrentSession();
    const roles = session?.user?.roles;
    const isAdmin = roles && Array.isArray(roles) && roles.length > 0 && roles.includes(ROLES.ADMIN);

    const toggleModal = () => {
        setModal((prevState) => !prevState);
    };

    return (
        <>
            <ul className={s.list}>
                {isAdmin ? (
                    <li className={s.item}>
                        <DashboardBtn />
                    </li>
                ) : null}
                <li className={s.item}>
                    <BasketBtn />
                </li>
                {session?.user?.id ? (
                    <>
                        <li className={s.item}>
                            <ProfileBtn />
                        </li>
                        <li className={s.item}>
                            <LogoutBtn onOpenModal={toggleModal} />
                        </li>
                    </>
                ) : null}
                {!session?.user?.id ? (
                    <li className={s.item}>
                        <LoginLink />
                    </li>
                ) : null}
            </ul>
            {modal ? (
                <Modal onClose={toggleModal}>
                    <SignOutConfWindow onClose={toggleModal} />
                </Modal>
            ) : null}
        </>
    );
};

export default TopBarIconButtons;
