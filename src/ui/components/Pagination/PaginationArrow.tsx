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
            <IoIosArrowBack className={clsx(isDisabled ? s.disabledIcon : s.icon)} />
        ) : (
            <IoIosArrowForward className={clsx(isDisabled ? s.disabledIcon : s.icon)} />
        );

    return isDisabled ? (
        <div className={isDisabled ? clsx(s.arrow, s.disabledArrow) : s.arrow}>{icon}</div>
    ) : (
        <Link className={isDisabled ? clsx(s.arrow, s.disabledArrow) : s.arrow} href={href}>
            {icon}
        </Link>
    );
};

export default PaginationArrow;
