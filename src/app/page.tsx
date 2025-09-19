import { CarouselPlugin } from "@/components/custom/CarouselPlugin";
import { getAllSlides } from "@/data/api";

export default async function Home() {
  const slidesData = await getAllSlides();

  return (
    <div className="p-4 flex flex-col justify-center items-center gap-0 sm:gap-30">
      <CarouselPlugin images={slidesData.fashion}></CarouselPlugin>
      <CarouselPlugin images={slidesData.commercial}></CarouselPlugin>
      <CarouselPlugin images={slidesData.editorial}></CarouselPlugin>
    </div>
  );
}
