"use client";
import { useState } from "react";
import { X } from "lucide-react";
import ProductCard from "./ProductCard";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="m-4 rounded bg-blue-600 px-4 py-2 text-white"
      >
        Open Cart
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[300px] bg-white shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold">Cart</h2>
          <button onClick={() => setIsOpen(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}

        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>

        <div className="p-4">
          <p>Your cart is empty.</p>
        </div>
      </aside>
    </>
  );
}
