"use client";
import CartPreview from "./CartPreview";
import { useCartStore } from "@/stores/cartStore";
import { X, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { CheckoutWindowToggle } from "./CheckoutWindow";

type SideBarToogleProps = {
  shoppingCartClicked: (value: boolean) => void;
};

function SideBarToogle({ shoppingCartClicked }: SideBarToogleProps) {
  const handleClick = () => shoppingCartClicked(true);
  const cart = useCartStore((state) => state.cart);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
      <button
        id="button-cart-toggle"
        onClick={handleClick}
        className="fixed top-0 right-0 m-4 rounded-md border border-gray-200 bg-white text-black px-4 py-2 shadow-inner hover:bg-black hover:text-white"
      >
        <ShoppingBag className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-600 text-white text-xs font-bold flex items-center justify-center shadow">
          {totalQuantity}
        </span>
      </button>
    </>
  );
}

export default function CartSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SideBarToogle shoppingCartClicked={setIsOpen}></SideBarToogle>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-[90vw] sm:w-[400px] shadow-xl bg-white p-2 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="fixed w-full top-0 z-10">
          <div className="p-5 flex justify-between items-center">
            <h2>Cart</h2>
            <button onClick={() => setIsOpen(false)} className="mr-5">
              <X className="h-5 w-5 hover:scale-150 transition-transform duration-200" />
            </button>
          </div>

          <div className="my-1 border-t opacity-70"></div>
        </div>
        <div className="h-[80vh] translate-y-20 overflow-y-scroll">
          {/* CONTENT */}
          <CartPreview></CartPreview>
        </div>

        <div className="fixed bottom-0 w-[90%] h-fit pb-5">
          <CheckoutWindowToggle></CheckoutWindowToggle>
        </div>
      </aside>
    </>
  );
}
