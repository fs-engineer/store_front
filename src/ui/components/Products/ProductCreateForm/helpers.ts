import { ICharacteristic } from '@/interfaces';
import { toast } from 'react-toastify';

type FormValues = {
    name: string | null;
    price: string | null;
    brandId: number | null;
    typeIds: number[];
    hairTypeIds: number[];
    characteristicIds: number[];
    description: string;
    directions: string;
    recommended: boolean;
};

export const renameCharacteristicsFields = (data: ICharacteristic[]) => {
    return data.map((el: ICharacteristic) => ({ id: el.id, name: el.value }));
};

export const checkFormExistValues = ({
    name,
    price,
    brandId,
    typeIds,
    hairTypeIds,
    characteristicIds,
    description,
    directions,
}: FormValues) => {
    if (!name) {
        toast.error('Треба ввести назву продукту');
        return false;
    } else if (!price) {
        toast.error('Треба додати ціну');
        return false;
    } else if (!brandId) {
        toast.error('Треба додати бренд');
        return false;
    } else if (!typeIds.length) {
        toast.error('Треба додати типи продукту');
        return false;
    } else if (!hairTypeIds.length) {
        toast.error('Треба додати типи волосся');
        return false;
    } else if (!characteristicIds.length) {
        toast.error('Треба додати характеристики');
        return false;
    } else if (!description) {
        toast.error('Треба додати опис продукту');
        return false;
    } else if (!directions) {
        toast.error('Треба додати спосіб користування');
        return false;
    } else {
        return true;
    }
};

export const createFormDataFromImageArray = (images: FileList | [], productId: number) => {
    const formData = new FormData();
    Array.from(images).forEach((image) => {
        formData.append('images', image);
    });
    formData.append('productId', productId.toString());

    return formData;
};
