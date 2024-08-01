import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useWindowSize from '@/hooks/useWindowSize';
import clsx from 'clsx';
import s from './mainMenu.module.css';

type Item = {
    name: string;
    value: string;
    href: string;
};

type Props = {
    items: Item[];
};

const MainMenu: React.FC<Props> = ({ items = [] }) => {
    const pathName = usePathname();
    const { width } = useWindowSize();

    return (
        <>
            {width && width > 600 && items.length ? (
                <ul className={s.list}>
                    {items.map((item) => (
                        <li key={item.name} className={s.item}>
                            <Link
                                href={item.href}
                                className={pathName === item.href ? clsx(s.link, s.activeLink) : clsx(s.link)}
                            >
                                {item.value}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : null}
        </>
    );
};

export default MainMenu;
