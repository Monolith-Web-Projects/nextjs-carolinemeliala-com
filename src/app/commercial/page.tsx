// "use client";
import { CarouselPlugin } from "@/components/custom/CarouselPlugin";
import { commercialSlides as mockcommercialSlides } from "@/data/slides";
// import { useCommercialSlides } from "@/data/api";
import { urlConfig } from "@/lib/urlConfig";

export default async function Commercial() {
  let commercialSlides = mockcommercialSlides; // fallback if backend is down

  try {
    const res = await fetch(`${urlConfig.apiBaseUrl}/slides/`);
    if (!res.ok) throw new Error("API Error");
    const data = await res.json();
    commercialSlides = data.commercial || mockcommercialSlides;
  } catch (e) {}

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="w-screen h-fit sm:w-5/6">
        <CarouselPlugin images={commercialSlides}></CarouselPlugin>
      </div>
    </div>
  );
}
