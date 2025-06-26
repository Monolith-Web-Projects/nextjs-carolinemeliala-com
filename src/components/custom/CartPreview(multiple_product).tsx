"use client";

import Image from "next/image";
import { useCartStore } from "@/stores/cartStore";

export default function CartPreview() {
  const cart = useCartStore((state) => state.cart);

  const groupedCart = Object.values(
    cart.reduce((acc, item) => {
      if (!acc[item.productId]) {
        acc[item.productId] = { ...item };
      } else {
        acc[item.productId].quantity += item.quantity;
      }
      return acc;
    }, {} as Record<string, (typeof cart)[number]>)
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
              className="object-cover rounded-2xl shadow-lg"
              src={item.productImage}
              alt={item.productName}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-5">
            <h5 className="my-1 text-lg font-semibold">{item.productName}</h5>
            <p className="my-2 text-sm text-gray-700">{item.productPrice}</p>
            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
