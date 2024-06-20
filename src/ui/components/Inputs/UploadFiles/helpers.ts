export const formatFileQuantityText = (quantity: number, placeholder: string) => {
    return quantity
        ? `Додано ${quantity} ${quantity === 1 ? 'файл' : quantity > 1 && quantity < 5 ? 'файли' : 'файлів'}`
        : placeholder;
};
