import { array, boolean, number, object, string } from 'zod';

export const productSchema = object({
    name: string().min(3, { message: 'Name is should be min 3 symbols' }),
    price: number().positive({ message: 'Price must be a positive number' }),
    brandId: number().positive({ message: 'Brand ID must be a positive number' }),
    description: string().min(5, { message: 'Description is required' }),
    types: array(number().positive({ message: 'Each type ID must be a positive number' })),
    hairTypes: array(number().positive({ message: 'Each hair type ID must be a positive number' })),
    characteristics: array(number().positive({ message: 'Each characteristic ID must be a positive number' })),
    recommended: boolean(),
    directions: string().min(5, { message: 'Directions are required' }),
    volume: number().min(1, { message: 'Volume should be min 1 symbol' }),
    composition: string().min(10, { message: 'Composition should be min 10 symbol' }),
    article: string(),
});
