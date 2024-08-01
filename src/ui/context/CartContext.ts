import { ICart } from '@/interfaces';
import { createContext } from 'react';

interface ICartContext {
    cartItems: ICart[];
    addToCart: (item: ICart) => void;
    removeFromCart: (id: number) => void;
}

const CartContext = createContext<ICartContext | undefined>(undefined);

export default CartContext;
