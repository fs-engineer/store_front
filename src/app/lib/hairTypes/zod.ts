import { object, string } from 'zod';

export const hairTypeSchema = object({
    name: string({ required_error: 'Немає данних типу продукту' })
        .min(3, 'Мінімальне значеня має бути 5')
        .max(100, 'Максимальне значеня має бути не білше 100 символів'),
});
