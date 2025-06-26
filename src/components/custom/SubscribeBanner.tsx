import Button from "@/components/custom/Button";
import Image from "next/image";

type SubscribeBannerProps = {
  SubscribeTitle?: string;
  PromotionText?: string;
  className?: string;
};

export default function SubscribeBanner({
  className = "border-0",
  SubscribeTitle = "Thankyou for purchasing our products",
  PromotionText = "Get the latest updates from our products and promotions. Subscribe so you will not miss any promotions and our latest updates!",
}: SubscribeBannerProps) {
  return (
    <section
      className={`border border-gray-200 rounded-2xl shadow-xl bg-white p-6 ${className}`}
    >
      <div className="w-fit relative h-100 grid grid-cols-1 sm:grid-cols-[1fr_1.5fr] grid-rows-1">
        <div className="relative  h-full w-full">
          <Image
            className="object-cover"
            src="https://dmusemagz.com/wp-content/uploads/2023/12/Dmuse-14th_Edition-Nasya_Marcella.png"
            alt="photo.png"
            fill={true}
          ></Image>
        </div>

        <div className="relative  flex flex-col justify-center items-center p-5">
          <div className="relative sm:w-3/4 w-full flex-col justify-center items-center  p-2">
            <h1 className="text-center">{SubscribeTitle}</h1>
            <div className="flex flex-col justify-center items-center ">
              <div className="m-15 flex flex-col sm:flex-row h-10 w-full ">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="-translate-x-7 min-h-10 w-full min-w-80 rounded-4xl border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />

                <Button buttonText="Subscribe"></Button>
              </div>

              <div className="w-full text-center mt-20 sm:mt-0 text-gray-600">
                <p>{PromotionText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
