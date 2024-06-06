'use client';

import { generatePagination, getCurrentPage } from '@/app/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';
import PaginationNumber from '@/ui/components/Pagination/PaginationNumber';
import PaginationArrow from '@/ui/components/Pagination/PaginationArrow';
import s from './pagination.module.css';
import { getPosition } from '@/ui/components/Pagination/utils';

export default function Pagination({ totalPages }: { totalPages: number }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = getCurrentPage();

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());

        return `${pathname}?${params.toString()}`;
    };

    const allPages = generatePagination(currentPage, totalPages);

    return (
        <>
            <div className={s.container}>
                <PaginationArrow direction="left" href={createPageURL(currentPage - 1)} isDisabled={currentPage <= 1} />

                <div className={s.container}>
                    {allPages.map((page, index) => {
                        const position = getPosition(index, allPages, page);

                        return (
                            <PaginationNumber
                                key={page}
                                href={createPageURL(page)}
                                page={page}
                                position={position}
                                isActive={currentPage === page}
                            />
                        );
                    })}
                </div>

                <PaginationArrow
                    direction="right"
                    href={createPageURL(currentPage + 1)}
                    isDisabled={currentPage >= totalPages}
                />
            </div>
        </>
    );
}
