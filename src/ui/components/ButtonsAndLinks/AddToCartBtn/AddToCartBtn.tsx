import React from 'react';
import { CreateBtn } from '@/ui/components';
import { IProduct } from '@/interfaces';
import { useCart } from '@/hooks/useCart';

interface IProps {
    product: IProduct;
    quantity: number;
}

const AddToCartBtn: React.FC<IProps> = ({ product, quantity = 1 }) => {
    const { addToCart } = useCart();
    const { name, types, id, images, volume, price, article } = product;
    const stringifiedTypes = types.map((el) => el.name).join(' ');
    const image = images[0].secureUrl;

    const handleClick = () => {
        addToCart({ name, types: stringifiedTypes, id, image, volume, price, article, quantity });
    };

    return <CreateBtn type={'button'} text={'Купити'} onClick={handleClick} />;
};

export default AddToCartBtn;
