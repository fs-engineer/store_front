type DataItem = { [key: string]: any }; // Тип для елементів масиву data
type Fields = string[]; // Тип для масиву fields

export const getDataFields = (data: DataItem[], fields: Fields): Partial<DataItem>[] => {
    const serializedData = data.map((item) => {
        const newItem: Partial<DataItem> = {};
        fields.forEach((field) => {
            if (field in item) {
                newItem[field] = item[field];
            }
        });
        return newItem;
    });
    return serializedData;
};
