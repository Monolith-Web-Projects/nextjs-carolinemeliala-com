import { CarouselPlugin } from "@/components/custom/CarouselPlugin";
import { getAllSlides } from "@/data/api";

interface FashionSectionProps {
  images: string[];
}

export default function FashionSection({ images }: FashionSectionProps) {
  return (
    <div className="w-screen h-fit sm:w-5/6">
      <CarouselPlugin images={images} />
    </div>
  );
}
