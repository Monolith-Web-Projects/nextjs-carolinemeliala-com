export const dynamic = "force-dynamic";
import { CarouselPlugin } from "@/components/custom/CarouselPlugin";
import { commercialSlides as mockcommercialSlides } from "@/data/slides";
import { urlConfig } from "@/lib/urlConfig";
import { logToFile } from "@/lib/logger";

export default async function Commercial() {
  let commercialSlides = mockcommercialSlides;

  try {
    const res = await fetch(`${urlConfig.apiBaseUrl}/slides/`);
    if (!res.ok) throw new Error("API Error");
    const data = await res.json();
    commercialSlides = Array.isArray(data.commercial)
      ? data.commercial
      : typeof data.commercial === "string"
      ? data.commercial.split(",")
      : mockcommercialSlides;
  } catch (e) {
    logToFile("🛑 Failed to fetch slides", e);
  }

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="w-screen h-fit sm:w-5/6">
        <CarouselPlugin images={commercialSlides}></CarouselPlugin>
      </div>
    </div>
  );
}
