"use client";
import { useState } from "react";
import { UseCheckoutWindow } from "./CheckoutWindowContext";
import { X } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import {
  getGroupedCartItems,
  getTotalPrice,
} from "@/components/custom/ecommerceModule/logic/cartDataHandler";

const CheckoutForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const API_URL = "http://localhost:3000";

    try {
      const response = await fetch(`${{API_URL}}/api/checkout`, {
        method: POST,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form), 
      });

      if (!response.ok) {
        throw new Error("response not ok");
      }

      const result = await response.json();
      console.log("Order Placed:", form);

    } catch (error) {
      console.error("Error placing order: ", error);
    }

  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Billing Information</h2>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        className="w-full p-3 rounded-lg border border-gray-300"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        className="w-full p-3 rounded-lg border border-gray-300"
      />
      <input
        type="text"
        name="address"
        placeholder="Street Address"
        value={form.address}
        onChange={handleChange}
        className="w-full p-3 rounded-lg border border-gray-300"
      />
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          className="w-full p-3 rounded-lg border border-gray-300"
        />
        <input
          type="text"
          name="zip"
          placeholder="ZIP / Postal Code"
          value={form.zip}
          onChange={handleChange}
          className="w-full p-3 rounded-lg border border-gray-300"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
      >
        Place Order
      </button>
    </div>
  );
};

export const CheckoutWindowToggle = () => {
  const [checkoutClicked, setcheckoutClicked] = useState(false);
  const { openWindow } = UseCheckoutWindow();
  const cart = useCartStore((state) => state.cart);

  if (cart.length === 0) return null;
  const handleClick = () => {
    setcheckoutClicked(true);
    openWindow();
    setTimeout(() => setcheckoutClicked(false), 100);
  };

  return (
    <button
      id="button-cart-checkout"
      className={`w-full rounded-lg px-6 py-3 text-sm font-semibold shadow-sm transition-all duration-500 ease-[cubic-bezier(0.2,0.6,0.7,2)]
      ${
        checkoutClicked
          ? "bg-black text-gray-300 border-3 border-gray-400"
          : "bg-black text-white hover:bg-white hover:text-black"
      }`}
      onClick={handleClick}
    >
      Checkout
    </button>
  );
};

export default function CheckoutWindow() {
  const { isOpen, closeWindow } = UseCheckoutWindow();
  if (!isOpen) return null;

  // preparing cart data
  const cart = useCartStore((state) => state.cart);
  const groupedCart = getGroupedCartItems(cart);
  const totalPrice = getTotalPrice(groupedCart);
  const totalAfterTax = totalPrice + (totalPrice * 15) / 100;

  return (
    <div className="fixed inset-0 z-80 flex items-start justify-center bg-black/50 px-4 py-10">
      <div className="relative w-full max-w-3xl rounded-2xl bg-white shadow-lg p-6">
        {/* Close Button */}
        <button
          onClick={closeWindow}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X className="h-5 w-5" />
        </button>

        <h1
          id="checkout-header"
          className="text-2xl font-bold mb-4 text-center"
        >
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 border-t-2 gap-0 lg:gap-8 p-5">
          <div id="checkout-col-1 flex flex-col justify-between item-start">
            <h2 className="text-lg font-semibold">Order Summary</h2>

            <div
              id="product-order-list"
              className="overflow-y-scroll max-h-1/2"
            >
              {groupedCart.map((item) => (
                <div key={item.productId} className="space-y-4">
                  <div className="border rounded-xl p-4">
                    <div className="flex justify-between">
                      <span>{item.productName}</span>
                      <span>Quantity: 2</span>
                    </div>
                    <span>Total price: {item.totalPricePerProduct}</span>
                  </div>
                </div>
              ))}
            </div>
            <div id="checkout-price-summary" className="my-5">
              <div className="flex justify-between font-bold">
                <span>Sub Total</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Tax</span>
                <span>15%</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Grand Total</span>
                <span>${totalAfterTax}</span>
              </div>
            </div>
          </div>

          <div id="checkout-col-2">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </div>
  );
}
