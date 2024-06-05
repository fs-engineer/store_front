import { number, object, string } from 'zod';

export const brandSchema = object({
    name: string({ required_error: 'Немає країни' }).min(2, 'Немає країни'),
    countryId: number({ required_error: 'Немає id країни' }),
});
