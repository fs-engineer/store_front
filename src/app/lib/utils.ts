import { ISearchParams } from '@/interfaces';

export const generatePagination = (currentPage: number, totalPages: number) => {
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
        return [1, 2, 3, '...', totalPages - 1, totalPages];
    }

    if (currentPage >= totalPages - 2) {
        return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
};

export const getSearchParams = (searchParams: ISearchParams) => {
    const query = searchParams?.query || '';
    const currentPage = searchParams?.page || 1;
    const pageSize = searchParams?.pageSize || 10;

    return { query, pageSize, currentPage };
};
