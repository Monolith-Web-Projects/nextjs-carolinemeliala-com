import { CarouselPlugin } from "@/components/custom/CarouselPlugin";
import { commercialSlides } from "@/data/slides";

export default function Commercial() {
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="w-screen h-fit sm:w-5/6">
        <CarouselPlugin images={commercialSlides}></CarouselPlugin>
      </div>
    </div>
  );
}
