import SubscribeBanner from "@/components/custom/SubscribeBanner";
import CartSidebar from "@/components/custom/CartSidebar";
import { ProductGrid } from "@/components/custom/ProductGrid";

export default function Tests() {
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      {/* <SubscribeBanner></SubscribeBanner> */}
      <CartSidebar></CartSidebar>

      <div className="flex flex-wrap border-8 sm:w-[75vw] w-screen">
        <ProductGrid></ProductGrid>
      </div>
      {/* <Sidebar></Sidebar> */}
    </div>
  );
}
