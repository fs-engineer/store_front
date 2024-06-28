import Link from 'next/link';
import clsx from 'clsx';
import s from './breadcrumbs.module.css';

interface Breadcrumb {
    label: string;
    href: string;
    active?: boolean;
}

export default function Breadcrumbs({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) {
    return (
        <nav aria-label="Breadcrumb" className={s.nav}>
            <ul className={s.list}>
                {breadcrumbs.map((breadcrumb, index) => (
                    <li
                        key={breadcrumb.href}
                        aria-current={breadcrumb.active}
                        className={clsx(breadcrumb.active ? s.listItemActive : s.listItem)}
                    >
                        <Link href={breadcrumb.href} className={s.link}>
                            {breadcrumb.label}
                        </Link>
                        {index < breadcrumbs.length - 1 ? <span className={s.span}>/</span> : null}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
