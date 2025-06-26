"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

type Props = {
  initialQuantity?: number;
  min?: number;
  max?: number;
  onChange?: (quantity: number) => void;
};

export default function ProductQuantityButton({
  initialQuantity = 1,
  min = 1,
  max = 99,
  onChange,
}: Props) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const decrease = () => {
    if (quantity > min) {
      const newQty = quantity - 1;
      console.log("Decrease quantity to:", newQty); // <--debugging
      setQuantity(newQty);
      onChange?.(newQty);
    }
  };

  const increase = () => {
    if (quantity < max) {
      const newQty = quantity + 1;
      console.log("Increasing quantity to:", newQty); // <--debugging
      setQuantity(newQty);
      onChange?.(newQty);
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
