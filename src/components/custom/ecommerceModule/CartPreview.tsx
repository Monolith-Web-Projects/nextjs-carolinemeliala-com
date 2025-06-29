"use client";

import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { CartItem, useCartStore } from "@/stores/cartStore";

type ProductQuantityButtonProps = {
  productId: string;
  quantity: number;
  min?: number;
  max?: number;
};

type GroupedCartItem = CartItem & {
  totalPricePerProduct: number;
};

function ProductQuantityButton({
  quantity = 1,
  productId,
  min = 1,
  max = 99,
}: ProductQuantityButtonProps) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const decrease = () => {
    if (quantity <= min) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, -1);
    }
  };
  const increase = () => {
    if (quantity < max) {
      updateQuantity(productId, 1);
    }
  };

  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-2 py-1 text-sm">
      <button
        onClick={decrease}
        className="text-gray-600 hover:text-black disabled:opacity-40"
        disabled={quantity <= min}
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="w-6 text-center font-medium">{quantity}</span>
      <button
        onClick={increase}
        className="text-gray-600 hover:text-black disabled:opacity-40"
        disabled={quantity >= max}
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}

export default function CartPreview() {
  const cart = useCartStore((state) => state.cart);

  const groupedCart = Object.values(
    cart.reduce((acc, item) => {
      if (!acc[item.productId]) {
        acc[item.productId] = {
          ...item,
          totalPricePerProduct: item.productPrice * item.quantity,
        };
      } else {
        acc[item.productId].quantity += item.quantity;
        acc[item.productId].totalPricePerProduct +=
          item.productPrice * item.quantity;
      }
      return acc;
    }, {} as Record<string, GroupedCartItem>)
  );

  if (cart.length === 0) {
    return (
      <div className="p-5">
        <p className="text-gray-500">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {groupedCart.map((item) => (
        <div
          key={`${item.productId}`}
          className="flex rounded-2xl shadow-md bg-zinc-50 p-5"
        >
          <div className="relative h-40 w-40 flex-shrink-0">
            <Image
              className="object-cover rounded-2xl shadow-lg select-none"
              src={item.productImage}
              alt={item.productName}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-5">
            <h5 className="my-1 text-lg font-semibold">{item.productName}</h5>
            <p className="my-2 text-sm text-gray-700">{item.productPrice}</p>
            <p className="text-sm text-gray-600">
              Total Price: {item.totalPricePerProduct}
            </p>
            <ProductQuantityButton
              productId={item.productId}
              quantity={item.quantity}
            ></ProductQuantityButton>
          </div>
        </div>
      ))}
    </div>
  );
}
