import { urlConfig } from "@/lib/urlConfig";
import { logToFile } from "@/lib/logger";
import { fashionSlides,commercialSlides,editorialSlides } from "./slides";

export interface SlidesData {
    fashion: string[];
    editorial: string[];
    commercial: string[];
}

export const getAllSlides = async (): Promise<SlidesData> => {
    const defaultData: SlidesData = {
        fashion: fashionSlides,
        editorial: editorialSlides,
        commercial: commercialSlides,
    };
        logToFile("Calling_URL: ",`${urlConfig.apiBaseUrl}`,"/slides/");

    try {
        const res = await fetch(`${urlConfig.apiBaseUrl}/slides/`);
        if (!res.ok) {
            logToFile("RES:", res.status, res.statusText);
            throw new Error("❌ API Failed");
        } 
        
        const data = await res.json();
        logToFile("✅ API Success");
        logToFile("RES:", JSON.stringify(data, null, 0));

        return {
            fashion: Array.isArray(data.fashion)
                ? data.fashion
                : typeof data.fashion === "string"
                ? data.fashion.split(",")
                : defaultData.fashion,

            commercial: Array.isArray(data.commercial)
                ? data.commercial
                : typeof data.commercial === "string"
                ? data.commercial.split(",")
                : defaultData.commercial,

            editorial: Array.isArray(data.editorial)
                ? data.editorial
                : typeof data.editorial === "string"
                ? data.editorial.split(",")
                : defaultData.editorial,
        };
    } catch (e: any) {
        logToFile("🛑 Network Failure:");
        logToFile("RES: ", 
            JSON.stringify({message: e.message, cause: e.cause, stack: e.stack,},null,0)
        );
        return defaultData;
    }
};