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
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, delta:number) => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: [],

  addToCart: (item) =>
    set((state) => {
      const existing = state.cart.find((p) => p.productId === item.productId);

      if (existing) {
        return {
          cart: state.cart.map((p) => p.productId === item.productId
            ? { ...p, quantity: p.quantity + item.quantity}
            : p
          ),
        };
      }
      return {cart: [...state.cart, item]};
    }),

    removeFromCart: (productId) =>
      set((state) => ({
        cart: state.cart.filter((item) => item.productId !== productId),
      })),

    updateQuantity: (productId, delta) =>
      set((state) => ({
        cart: state.cart.map((item) => item.productId === productId
        ? { ...item, quantity: item.quantity + delta}
        : item  
      )
      .filter((item) => item.quantity > 0),
        }))

}));