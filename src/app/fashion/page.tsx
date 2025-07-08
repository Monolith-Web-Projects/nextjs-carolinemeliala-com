import { CarouselPlugin } from "@/components/custom/CarouselPlugin";
import { fashionSlides } from "@/data/slides";

export default function Fashion() {
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="w-screen h-fit sm:w-5/6">
        <CarouselPlugin images={fashionSlides}></CarouselPlugin>
      </div>
    </div>
  );
}
