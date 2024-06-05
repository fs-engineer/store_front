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

export interface IUser {
    id: number;
    email: string;
    name: string | null;
    lastName: string | null;
    number: string | null;
    roles: IRole[];
}

export interface IRole {
    id: number;
    name: 'ADMIN' | 'USER' | 'GUEST';
    description: string;
}

export type ButtonTypes = 'submit' | 'button' | 'reset';
