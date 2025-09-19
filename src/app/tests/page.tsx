import SubscribeBanner from "@/components/custom/SubscribeBanner";
import { ProductGrid } from "@/components/custom/ecommerceModule/ProductGrid";
import CartSidebar from "@/components/custom/ecommerceModule/CartSidebar";
import { CheckoutWindowProvider } from "@/components/custom/ecommerceModule/CheckoutWindowContext";
import CheckoutWindow from "@/components/custom/ecommerceModule/CheckoutWindow";

export default function Tests() {
  return (
    <CheckoutWindowProvider>
      <div className="p-4 flex flex-col justify-center items-center">
        {/* <SubscribeBanner></SubscribeBanner> */}
        <CheckoutWindow></CheckoutWindow>
        <CartSidebar></CartSidebar>
        <div className="sm:w-[75vw] w-screen">
          <ProductGrid></ProductGrid>
        </div>
      </div>
    </CheckoutWindowProvider>
  );
}
