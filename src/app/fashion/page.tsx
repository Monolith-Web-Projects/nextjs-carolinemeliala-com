export const dynamic = "force-dynamic";
import { CarouselPlugin } from "@/components/custom/CarouselPlugin";
import { getAllSlides } from "@/data/api";

export default async function Fashion() {
  const slidesData = await getAllSlides();

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="w-screen h-fit sm:w-5/6">
        <CarouselPlugin images={slidesData.fashion}></CarouselPlugin>
      </div>
    </div>
  );
}
