export const dynamic = "force-dynamic";
import { CarouselPlugin } from "@/components/custom/CarouselPlugin";
import { fashionSlides as mockfashionSlides } from "@/data/slides";
// import { useFashionSlides } from "@/data/api";
import { urlConfig } from "@/lib/urlConfig";

export default async function Fashion() {
  let fashionSlides = mockfashionSlides; // fallback if backend is down

  try {
    console.log("👉 Fetching:", `${urlConfig.apiBaseUrl}/slides/`);
    const res = await fetch(`${urlConfig.apiBaseUrl}/slides/`);
    if (!res.ok) throw new Error("API Error");
    const data = await res.json();
    console.log("👉 Getting reponse:", `${data.fashion}`);
    fashionSlides = data.fashion || mockfashionSlides;
  } catch (e) {
    console.error("🛑 Failed to fetch slides", e);
  }

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="w-screen h-fit sm:w-5/6">
        <CarouselPlugin images={fashionSlides}></CarouselPlugin>
      </div>
    </div>
  );
}
