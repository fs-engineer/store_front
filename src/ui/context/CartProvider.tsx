'use client';

import React, { useEffect, useState } from 'react';
import { ICart } from '@/interfaces';
import CartContext from '@/ui/context/CartContext';
import useLocalStorage from '@/hooks/useLocalStorage';
import { cartLocalStorage } from '@/constants';

type Props = {
    children: React.ReactNode;
};

const CartProvider: React.FC<Props> = ({ children }) => {
    const [cartItems, setCartItems] = useState<ICart[]>([]);
    const [localStorageItems, setLocalStorageItems] = useLocalStorage(cartLocalStorage, []);

    useEffect(() => {
        if (localStorageItems.length) {
            setCartItems(localStorageItems);
        }
    }, []);

    const addToCart = (item: ICart) => {
        setCartItems((prevItems) => {
            const filteredPrevItems = prevItems.filter((prevItem) => prevItem.id !== item.id);
            setLocalStorageItems([...filteredPrevItems, item]);

            return [...filteredPrevItems, item];
        });
    };

    const removeFromCart = (id: number) => {
        setCartItems((prevItems) => {
            const filteredPrevItems = prevItems.filter((item) => item.id !== id);
            setLocalStorageItems(filteredPrevItems);

            return filteredPrevItems;
        });
    };

    return <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>{children}</CartContext.Provider>;
};

export default CartProvider;
