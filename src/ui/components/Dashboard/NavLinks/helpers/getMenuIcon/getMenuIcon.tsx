import { GiButterfly, GiShamblingZombie } from 'react-icons/gi';
import clsx from 'clsx';
import buttonStyles from '@/ui/components/Buttons/buttons.module.css';
import { FaUsersCog } from 'react-icons/fa';
import { FaUserSecret } from 'react-icons/fa6';
import React from 'react';

const getMenuIcon = (isActive: boolean, name: string) => {
    switch (name) {
        case 'Продукти':
            return (
                <GiButterfly
                    className={
                        isActive
                            ? clsx(buttonStyles.icon, buttonStyles.sideMenuIconActive)
                            : clsx(buttonStyles.icon, buttonStyles.sideMenuIcon)
                    }
                />
            );
        case 'Користувачі':
            return (
                <FaUsersCog
                    className={
                        isActive
                            ? clsx(buttonStyles.icon, buttonStyles.sideMenuIconActive)
                            : clsx(buttonStyles.icon, buttonStyles.sideMenuIcon)
                    }
                />
            );
        case 'Ролі':
            return (
                <FaUserSecret
                    className={
                        isActive
                            ? clsx(buttonStyles.icon, buttonStyles.sideMenuIconActive)
                            : clsx(buttonStyles.icon, buttonStyles.sideMenuIcon)
                    }
                />
            );
        case 'Бренди':
            return (
                <GiShamblingZombie
                    className={
                        isActive
                            ? clsx(buttonStyles.icon, buttonStyles.sideMenuIconActive)
                            : clsx(buttonStyles.icon, buttonStyles.sideMenuIcon)
                    }
                />
            );
        default:
            return null;
    }
};

export default getMenuIcon;
