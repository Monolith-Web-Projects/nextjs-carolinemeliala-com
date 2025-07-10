// "use client";
import { CarouselPlugin } from "@/components/custom/CarouselPlugin";
// import { fashionSlides } from "@/data/slides";
// import { useFashionSlides } from "@/data/api";
import { urlConfig } from "@/lib/urlConfig";

export default async function Fashion() {
  const useFashionSlides = async () => {
    const res = await fetch(`${urlConfig.apiBaseUrl}/slides/`);
    const data = await res.json();
    const fashionSlides = data.fashion || [];
    return fashionSlides;
  };

  const fashionSlides = await useFashionSlides();

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="w-screen h-fit sm:w-5/6">
        <CarouselPlugin images={fashionSlides}></CarouselPlugin>
      </div>
    </div>
  );
}
