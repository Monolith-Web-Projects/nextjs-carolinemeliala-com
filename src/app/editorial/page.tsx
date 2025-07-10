"use client";
import { CarouselPlugin } from "@/components/custom/CarouselPlugin";
// import { editorialSlides } from "@/data/slides";
import { useEditorialSlides } from "@/data/api";

export default function Editorial() {
  const editorialSlides = useEditorialSlides();

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="w-screen h-fit sm:w-5/6">
        <CarouselPlugin images={editorialSlides}></CarouselPlugin>
      </div>
    </div>
  );
}
