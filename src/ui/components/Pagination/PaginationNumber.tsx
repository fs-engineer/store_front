import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import s from './pagination.module.css';

const PaginationNumber = ({
    page,
    href,
    isActive,
    position,
}: {
    page: number | string;
    href: string;
    position?: 'first' | 'last' | 'middle' | 'single';
    isActive: boolean;
}) => {
    //TODO NEED TO ADD STYLES FOR MIDDLE AND NOT ACTIVE, REMOVE THE HOVER
    const className = clsx(s.link, {
        [s.roundedL]: position === 'first' || position === 'single',
        [s.roundedR]: position === 'last' || position === 'single',
        [s.disableRBorder]: position !== 'single',
        [s.disabledLink]: position !== 'middle',
        [s.isActive]: isActive,
        // [s.hoverBgGray100]: !isActive && position !== 'middle',
        // [s.textGray300]: position === 'middle',
    });

    return isActive || position === 'middle' ? (
        <div className={className}>{page}</div>
    ) : (
        <Link href={href} className={className}>
            {page}
        </Link>
    );
};

export default PaginationNumber;
