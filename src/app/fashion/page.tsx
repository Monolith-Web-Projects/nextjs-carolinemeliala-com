"use client";
import { CarouselPlugin } from "@/components/custom/CarouselPlugin";
// import { fashionSlides } from "@/data/slides";
import { useFashionSlides } from "@/data/api";

export default function Fashion() {
  const fashionSlides = useFashionSlides();

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="w-screen h-fit sm:w-5/6">
        <CarouselPlugin images={fashionSlides}></CarouselPlugin>
      </div>
    </div>
  );
}
                                                    