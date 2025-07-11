export const dynamic = "force-dynamic";
import { CarouselPlugin } from "@/components/custom/CarouselPlugin";
import { editorialSlides as mockeditorialSlides } from "@/data/slides";
import { urlConfig } from "@/lib/urlConfig";
import { logToFile } from "@/lib/logger";

export default async function Editorial() {
  let editorialSlides = mockeditorialSlides;

  try {
    console.log("👉 Fetching:", `${urlConfig.apiBaseUrl}/slides/`);
    const res = await fetch(`${urlConfig.apiBaseUrl}/slides/`);
    if (!res.ok) throw new Error("API Error");
    const data = await res.json();
    console.log("👉 Getting reponse:", `${data.editorial}`);
    editorialSlides = Array.isArray(data.editorial)
      ? data.editorial
      : typeof data.editorial === "string"
      ? data.editorial.split(",")
      : mockeditorialSlides;
  } catch (e) {
    logToFile("🛑 Failed to fetch slides", e);
  }

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="w-screen h-fit sm:w-5/6">
        <CarouselPlugin images={editorialSlides}></CarouselPlugin>
      </div>
    </div>
  );
}
