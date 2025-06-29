"use client";

import Image from "next/image";
import { mockProducts } from "@/lib/products";
import { useCartStore } from "@/stores/cartStore";
import { CartItem } from "@/stores/cartStore";

type AddToCartButtonProps = CartItem & {
  onAddToCart: (item: CartItem) => void;
};

type ProductGridProps = {
  productId?: string;
  productCategory?: string;
  productName?: string;
  productColor?: string;
  productImage?: string;
  productSize?: string;
  productQuantity?: string;
  productDescription?: string;
  ProductPrice?: number;
};

export const ProductGrid = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const handleAddToCart = (item: CartItem) => {
    addToCart(item);
    console.log("Cart:", useCartStore.getState().cart);
  };

  return (
    <section className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-items-center">
      {mockProducts.map((product: ProductGridProps) => (
        <div
          key={product.productId}
          style={{ boxShadow: "-7px 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
          className="w-auto h-auto min-h-90 max-w-120 rounded-md border border-gray-200 bg-white grid grid-cols-[1fr_2fr] grid-rows-1 gap-2 p-2"
        >
          <div className="relative size-full rounded-md border border-gray-200">
            {product.productImage && (
              <Image
                className="object-cover select-none"
                src={product.productImage}
                alt="product image"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
          </div>

          <div className="rounded-md border border-gray-200 p-5 flex flex-col gap-4 justify-start">
            <h3 className="text-xl font-semibold">{product.productName}</h3>
            <div className="flex flex-col gap-1 text-sm text-gray-700">
              <p>Color: {product.productColor}</p>
              <p>Size: {product.productSize}</p>
              <p>Quantity: {product.productQuantity}</p>
              <p className="mt-3 text-gray-600 text-sm">
                {product.productDescription}
              </p>
            </div>
            <div className="flex items-center justify-between mt-6">
              <AddToCartButton
                productId={product.productId ?? ""}
                productPrice={product.ProductPrice ?? 100}
                productImage={product.productImage ?? ""}
                productName={product.productName ?? "Unnamed Product"}
                quantity={1}
                onAddToCart={handleAddToCart}
              />
              <h2 className="text-lg font-semibold text-gray-800">
                ${product.ProductPrice ?? 100}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const AddToCartButton = ({ onAddToCart, ...item }: AddToCartButtonProps) => (
  <button
    onClick={() => onAddToCart(item)}
    className="select-none rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800 shadow-md"
  >
    Add to Cart
  </button>
);
