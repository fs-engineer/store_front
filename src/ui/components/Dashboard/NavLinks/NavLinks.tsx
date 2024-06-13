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
    hairTypesKey,
    productsKey,
    productTypesKey,
    rolesKey,
    usersKey,
} from '@/constants';

const NavLinks = () => {
    const pathName = usePathname();
    const menuItems = [
        { name: productsKey, value: 'Продукти', href: `/dashboard/${productsKey}` },
        { name: usersKey, value: 'Користувачі', href: `/dashboard/${usersKey}` },
        { name: rolesKey, value: 'Ролі', href: `/dashboard/${rolesKey}` },
        { name: brandsKey, value: 'Бренди', href: `/dashboard/${brandsKey}` },
        { name: characteristicsKey, value: 'Характеристики', href: `/dashboard/${characteristicsKey}` },
        { name: productTypesKey, value: 'Типи продукту', href: `/dashboard/${productTypesKey}` },
        { name: hairTypesKey, value: 'Типи волосся', href: `/dashboard/${hairTypesKey}` },
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
