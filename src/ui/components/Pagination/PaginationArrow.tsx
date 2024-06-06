import clsx from 'clsx';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import s from './pagination.module.css';

const PaginationArrow = ({
    href,
    direction,
    isDisabled,
}: {
    href: string;
    direction: 'left' | 'right';
    isDisabled?: boolean;
}) => {
    const icon =
        direction === 'left' ? (
            <IoIosArrowBack className={clsx(isDisabled && s.disabledIcon)} />
        ) : (
            <IoIosArrowForward className={clsx(isDisabled && s.disabledIcon)} />
        );
    const className = clsx(s.link, s.rounded, {
        [s.disabledLink]: isDisabled,
        [s.marginR]: direction === 'left',
        [s.marginL]: direction === 'right',
    });

    return isDisabled ? (
        <div className={className}>{icon}</div>
    ) : (
        <Link className={className} href={href}>
            {icon}
        </Link>
    );
};

export default PaginationArrow;
