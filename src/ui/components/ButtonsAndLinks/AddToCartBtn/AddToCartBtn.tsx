import React, { useEffect, useState } from 'react';
import { CreateBtn } from '@/ui/components';
import useLocalStorage from '@/hooks/useLocalStorage';

type Cart = {
    id: number;
    quantity: number;
    price: number;
};

type Props = {
    id: number;
    price: number;
    quantity: number;
};

const AddToCartBtn: React.FC<Props> = ({ id, price, quantity = 1 }) => {
    const [cart, setCart] = useState<Cart | null>(null);
    const [storageValue, setStorageValue] = useLocalStorage('kiss.viktory.userCart', []);

    useEffect(() => {
        if (cart && !cart?.id) return;

        if (!storageValue.length && cart) {
            setStorageValue([cart]);
        } else {
            if (!cart) return;

            const filteredCart = storageValue.filter((el: Cart) => el.id !== cart.id);
            setStorageValue([...filteredCart, cart]);
        }
    }, [cart]);

    const addToCart = () => {
        setCart({ id, price, quantity });
    };

    return <CreateBtn type={'button'} text={'Купити'} onClick={addToCart} />;
};

export default AddToCartBtn;
