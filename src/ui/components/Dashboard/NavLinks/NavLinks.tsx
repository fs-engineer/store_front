'use client';

import React from 'react';
import s from './navLinks.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const menuItems = [
    { name: 'Products', href: '/dashboard/products' },
    { name: 'Users', href: '/dashboard/users' },
    { name: 'Roles', href: '/dashboard/roles' },
];

const NavLinks = () => {
    const pathName = usePathname();

    return (
        <ul className={s.list}>
            {menuItems.map((item, i) => (
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
