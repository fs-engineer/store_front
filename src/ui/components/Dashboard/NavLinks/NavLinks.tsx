'use client';

import React from 'react';
import s from './navLinks.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const menuItems = [
    { name: 'Продукти', href: '/dashboard/products' },
    { name: 'Користувачі', href: '/dashboard/users' },
    { name: 'Ролі', href: '/dashboard/roles' },
    { name: 'Бренди', href: '/dashboard/brands' },
];

const NavLinks = () => {
    const pathName = usePathname();

    return (
        <ul className={s.list}>
            {menuItems.map((item) => (
                <li key={item.name} className={s.listItem}>
                    <Link
                        href={item.href}
                        className={pathName === item.href ? clsx(s.listLink, s.listLinkActive) : clsx(s.listLink)}
                    >
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;
