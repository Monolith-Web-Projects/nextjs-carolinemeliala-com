import { create } from 'zustand';

export type CartItem = {
  productId: string;
  productName: string;
  productPrice: number,
  productImage: string,
  quantity: number;
};

type CartState = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
    })),
}));
