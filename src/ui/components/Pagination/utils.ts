export const getPosition = (index: number, allPages: (string | number)[], page: string | number) => {
    let position: 'first' | 'last' | 'single' | 'middle' | undefined;

    if (index === 0) position = 'first';
    if (index === allPages.length - 1) position = 'last';
    if (allPages.length === 1) position = 'single';
    if (page === '...') position = 'middle';

    return position;
};
