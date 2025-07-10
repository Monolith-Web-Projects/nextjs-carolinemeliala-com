// "use client";
import { CarouselPlugin } from "@/components/custom/CarouselPlugin";
// import { editorialSlides } from "@/data/slides";
// import { useEditorialSlides } from "@/data/api";
import { urlConfig } from "@/lib/urlConfig";

export default async function Editorial() {
  const useEditorialSlides = async () => {
    const res = await fetch(`${urlConfig.apiBaseUrl}/slides/`);
    const data = await res.json();
    const editorialSlides = data.editorial || [];
    return editorialSlides;
  };

  const editorialSlides = await useEditorialSlides();
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="w-screen h-fit sm:w-5/6">
        <CarouselPlugin images={editorialSlides}></CarouselPlugin>
      </div>
    </div>
  );
}
