// import { custom, number, object, string } from 'zod';

// TODO need to add fileList checking in ProductCreateForm or imageUpload function but I think need do it before transformation in formData or check formData
// const fileSchema = object({
//     name: string().min(5, { message: 'Min file name length should be 5 symbols' }),
//     type: string().regex(/image\/(jpeg|png)$/, { message: 'Only JPEG and PNG images are allowed' }),
//     size: number().max(5 * 1024 * 1024, { message: 'File size should not exceed 5MB' }), // 5MB limit
// });

// Кастомная проверка для FileList
// export const fileListSchema = custom<FileList>(
//     (value) => {
//         if (!(value instanceof FileList)) {
//             return false;
//         }
//         // Проверка каждого файла в списке
//         for (let i = 0; i < value.length; i++) {
//             const file = value[i];
//             const validation = fileSchema.safeParse(file);
//             if (!validation.success) {
//                 return false;
//             }
//         }
//         return true;
//     },
//     { message: 'Invalid files' },
// );
