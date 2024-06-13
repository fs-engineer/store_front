import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const useCurrentPage = () => {
    const [page, setPage] = useState(1);
    const searchParams = useSearchParams();

    useEffect(() => {
        setPage(Number(searchParams.get('page')) || 1);
    }, [searchParams]);

    return page;
};

export default useCurrentPage;
