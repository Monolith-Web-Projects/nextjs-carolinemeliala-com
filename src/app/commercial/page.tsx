// "use client";
import { CarouselPlugin } from "@/components/custom/CarouselPlugin";
// import { commercialSlides } from "@/data/slides";
// import { useCommercialSlides } from "@/data/api";
import { urlConfig } from "@/lib/urlConfig";

export default async function Commercial() {
  const useCommercialSlides = async () => {
    const res = await fetch(`${urlConfig.apiBaseUrl}/slides/`);
    const data = await res.json();
    const commercialSlides = data.commercial || [];
    return commercialSlides;
  };

  const commercialSlides = await useCommercialSlides();
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="w-screen h-fit sm:w-5/6">
        <CarouselPlugin images={commercialSlides}></CarouselPlugin>
      </div>
    </div>
  );
}
