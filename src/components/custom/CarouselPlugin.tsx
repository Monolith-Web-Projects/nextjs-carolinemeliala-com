"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

type CarouselPluginProps = {
  images: string[];
  headline?: string;
};

export function CarouselPlugin({ images, headline }: CarouselPluginProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-auto min-h-150]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="w-auto min-h-150">
        {images.map((src, index) => (
          <CarouselItem key={index} className="basis-1/4">
            <Image
              className="h-4/5 w-full object-cover"
              src={src}
              alt={`Images Number: ${index + 1}`}
              width={2000}
              height={1149}
              priority
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
