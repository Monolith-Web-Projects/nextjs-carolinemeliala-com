import { CartItem } from "@/stores/cartStore";

type GroupedCartItem = CartItem & {
    totalPricePerProduct: number;
  };


export const getTotalPrice = (cart: GroupedCartItem[]): number => {
    return cart.reduce((acc,item) => acc + item.totalPricePerProduct, 0);
};

  
export const getGroupedCartItems = (cart: CartItem[]): GroupedCartItem[] => {
    return Object.values(
        cart.reduce((acc, item) => {
            if (!acc[item.productId]) {
                acc[item.productId] = {
                    ...item, totalPricePerProduct: item.productPrice * item.quantity
                };
            } else {
                acc[item.productId].quantity += item.quantity;
                acc[item.productId].totalPricePerProduct += item.productPrice * item.quantity;
            }
            return acc;
        }, {} as Record<string, GroupedCartItem>)
    );
};
