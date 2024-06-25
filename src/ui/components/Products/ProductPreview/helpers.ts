import { ISelectInputDataItem } from '@/interfaces';

export const getOptionNames = (options: ISelectInputDataItem[], ids: number[]) => {
    return options.filter((el) => ids.includes(el.id)).map((el) => el.name);
};
