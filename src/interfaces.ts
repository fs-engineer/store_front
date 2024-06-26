export interface IIcon {
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
}

export interface ISearchParams {
    query: string;
    page: number;
    pageSize: number;
}

export interface IProps {
    searchParams: ISearchParams;
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

export interface ICountry {
    name: string;
}

export interface IBrand {
    id: number;
    name: string;
    country: ICountry;
}

export interface ICharacteristic {
    id: number;
    value: string;
}

export interface IProductType {
    id: number;
    name: string;
}

export interface IHairTypes {
    id: number;
    name: string;
}

export interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    brandId: number;
    composition: string;
    wayToUse: string;
    images: string[];
    recommended: boolean;
    rate: number;
}

export interface ISelectInputDataItem {
    id: number;
    name: string;
}

export type ButtonTypes = 'submit' | 'button' | 'reset';
