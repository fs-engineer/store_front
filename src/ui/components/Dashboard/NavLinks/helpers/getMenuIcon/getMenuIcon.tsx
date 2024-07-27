import { GiBlackBar, GiButterfly, GiShamblingZombie, GiWomanElfFace } from 'react-icons/gi';
import clsx from 'clsx';
import buttonStyles from '@/ui/components/ButtonsAndLinks/buttons.module.css';
import { FaAirFreshener, FaUsersCog } from 'react-icons/fa';
import { FaUserSecret } from 'react-icons/fa6';
import React from 'react';
import {
    brandsKey,
    characteristicsKey,
    hairTypesKey,
    productsKey,
    productTypesKey,
    rolesKey,
    usersKey,
} from '@/constants';

const getMenuIcon = (isActive: boolean, name: string) => {
    const className = isActive
        ? clsx(buttonStyles.icon, buttonStyles.sideMenuIconActive)
        : clsx(buttonStyles.icon, buttonStyles.sideMenuIcon);

    switch (name) {
        case productsKey:
            return <GiButterfly className={className} />;
        case usersKey:
            return <FaUsersCog className={className} />;
        case rolesKey:
            return <FaUserSecret className={className} />;
        case brandsKey:
            return <GiShamblingZombie className={className} />;
        case characteristicsKey:
            return <GiBlackBar className={className} />;
        case productTypesKey:
            return <FaAirFreshener className={className} />;
        case hairTypesKey:
            return <GiWomanElfFace className={className} />;
        default:
            return null;
    }
};

export default getMenuIcon;
