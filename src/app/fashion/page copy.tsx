export const dynamic = "force-dynamic";
import { logToFile } from "@/lib/logger";
import { CarouselPlugin } from "@/components/custom/CarouselPlugin";
import { fashionSlides as mockfashionSlides } from "@/data/slides";
import { urlConfig } from "@/lib/urlConfig";

export default async function Fashion() {
  let fashionSlides = mockfashionSlides;

  try {
    const res = await fetch(`${urlConfig.apiBaseUrl}/slides/`);
    if (!res.ok) throw new Error("API Error");
    const data = await res.json();
    fashionSlides = Array.isArray(data.fashion)
      ? data.fashion
      : typeof data.fashion === "string"
      ? data.fashion.split(",")
      : mockfashionSlides;
  } catch (e) {
    logToFile("🛑 Failed to fetch slides", e);
  }

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="w-screen h-fit sm:w-5/6">
        <CarouselPlugin images={fashionSlides}></CarouselPlugin>
      </div>
    </div>
  );
}
