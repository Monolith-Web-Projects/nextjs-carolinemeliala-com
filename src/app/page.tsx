import { CarouselPlugin } from "@/components/custom/CarouselPlugin";
import Fashion from "./fashion/page";
import Commercial from "./commercial/page";
import Editorial from "./editorial/page";

export default function Home() {
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <Fashion></Fashion>
      <Commercial></Commercial>
      <Editorial></Editorial>
    </div>
  );
}
