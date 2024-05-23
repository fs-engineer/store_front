export interface IIcon {
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
}

export interface ISearchParams {
    searchParams: {
        query: string;
        page: number;
    };
}
