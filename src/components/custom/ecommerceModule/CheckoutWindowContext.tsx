"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type CheckoutWindowContextType = {
  isOpen: boolean;
  openWindow: () => void;
  closeWindow: () => void;
};

const CheckoutWindowContext = createContext<CheckoutWindowContextType | null>(
  null
);

export const UseCheckoutWindow = () => {
  const ctx = useContext(CheckoutWindowContext);
  if (!ctx) throw new Error("useCheckoutWindow must be inside a Provider");
  return ctx;
};

export const CheckoutWindowProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CheckoutWindowContext.Provider
      value={{
        isOpen,
        openWindow: () => setIsOpen(true),
        closeWindow: () => setIsOpen(false),
      }}
    >
      {children}
    </CheckoutWindowContext.Provider>
  );
};
