'use client';

import React from 'react';
import s from './navLinks.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import getMenuIcon from '@/ui/components/Dashboard/NavLinks/helpers/getMenuIcon/getMenuIcon';
import {
    brandsKey,
    characteristicsKey,
    dashboardKey,
    hairTypesKey,
    productsKey,
    productTypesKey,
    rolesKey,
    usersKey,
} from '@/constants';

const NavLinks = () => {
    const pathName = usePathname();
    const menuItems = [
        { name: productsKey, value: 'Продукти', href: `/${dashboardKey}/${productsKey}` },
        { name: usersKey, value: 'Користувачі', href: `/${dashboardKey}/${usersKey}` },
        { name: rolesKey, value: 'Ролі', href: `/${dashboardKey}/${rolesKey}` },
        { name: brandsKey, value: 'Бренди', href: `/${dashboardKey}/${productsKey}/${brandsKey}` },
        {
            name: characteristicsKey,
            value: 'Характеристики',
            href: `/${dashboardKey}/${productsKey}/${characteristicsKey}`,
        },
        { name: productTypesKey, value: 'Типи продукту', href: `/${dashboardKey}/${productsKey}/${productTypesKey}` },
        { name: hairTypesKey, value: 'Типи волосся', href: `/${dashboardKey}/${productsKey}/${hairTypesKey}` },
    ];

    return (
        <ul className={s.list}>
            {menuItems.map((item) => (
                <li key={item.value} className={s.listItem}>
                    <Link
                        href={item.href}
                        className={pathName === item.href ? clsx(s.listLink, s.listLinkActive) : clsx(s.listLink)}
                    >
                        {getMenuIcon(pathName === item.href, item.name)}
                        {item.value}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;
