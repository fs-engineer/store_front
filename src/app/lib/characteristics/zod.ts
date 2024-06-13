import { object, string } from 'zod';

export const characteristicSchema = object({
    value: string({ required_error: 'Немає данних характеристики' })
        .min(5, 'Мінімальне значеня має бути 5')
        .max(100, 'Максимальне значеня має бути не білше 100 символів'),
});
