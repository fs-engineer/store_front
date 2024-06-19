import { ICharacteristic } from '@/interfaces';

export const renameCharacteristicsFields = (data: ICharacteristic[]) => {
    return data.map((el: ICharacteristic) => ({ id: el.id, name: el.value }));
};
