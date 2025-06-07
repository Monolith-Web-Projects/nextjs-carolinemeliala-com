import { CarouselPlugin } from "@/components/custom/CarouselPlugin";

export default function Fashion() {
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="w-screen h-fit sm:w-5/6">
        <CarouselPlugin
          images={[
            "/fashion/612.jpg",
            "/fashion/beauty_spread.jpg",
            "/fashion/bunhq.jpg",
            "/fashion/Capture15.JPG",
            "/fashion/Capture19.JPG",
            "/fashion/Capture2.JPG",
            "/fashion/Capture4.JPG",
            "/fashion/Capture5.JPG",
            "/fashion/Capture6.JPG",
            "/fashion/Capture8.JPG",
            "/fashion/Capture9.JPG",
          ]}
        ></CarouselPlugin>
      </div>
    </div>
  );
}
