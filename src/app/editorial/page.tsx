export const dynamic = "force-dynamic";
import { CarouselPlugin } from "@/components/custom/CarouselPlugin";
import { editorialSlides as mockeditorialSlides } from "@/data/slides";
// import { useEditorialSlides } from "@/data/api";
import { urlConfig } from "@/lib/urlConfig";

export default async function Editorial() {
  let editorialSlides = mockeditorialSlides; // fallback if backend is down

  try {
    console.log("👉 Fetching:", `${urlConfig.apiBaseUrl}/slides/`);
    const res = await fetch(`${urlConfig.apiBaseUrl}/slides/`);
    if (!res.ok) throw new Error("API Error");
    const data = await res.json();
    console.log("👉 Getting reponse:", `${data.editorial}`);
    editorialSlides = data.editorial || mockeditorialSlides;
  } catch (e) {
    console.error("🛑 Failed to fetch slides", e);
  }

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="w-screen h-fit sm:w-5/6">
        <CarouselPlugin images={editorialSlides}></CarouselPlugin>
      </div>
    </div>
  );
}
