import Image from "next/image";
// import ProductQuantityButton from "./ProductQuantityButton";

type ProductCardProps = {
  ProductImages?: string;
  ProductPrice?: string;
  ProductName?: string;
};

export default function ProductCard({
  ProductImages = "https://dmusemagz.com/wp-content/uploads/2023/12/Dmuse-14th_Edition-Nasya_Marcella.png",
  ProductPrice = "Rp.150.000",
  ProductName = "DMuse Magazine - 13th Edition",
}: ProductCardProps) {
  return (
    <div>
      <div className="flex rounded-2xl shadow-md bg-zinc-50 p-5 h-fit">
        <div className="relative  h-40 w-40 border-0 border-lime-500 ">
          <Image
            className="object-cover rounded-2xl shadow-lg"
            src={ProductImages}
            alt="photo.png"
            fill={true}
          ></Image>
        </div>
        <div className="p-5">
          <h5 className="my-1">{ProductName}</h5>
          <p className="my-2 text-sm">{ProductPrice}</p>

          <div className="flex justify-between">
            <p className="text-sm">Quantity</p>
            {/* <ProductQuantityButton></ProductQuantityButton> */}
          </div>
        </div>
      </div>
    </div>
  );
}
