import { CarouselPlugin } from "@/components/custom/CarouselPlugin";

export default function Commercial() {
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="w-screen h-fit sm:w-5/6">
        <CarouselPlugin
          images={[
            "/commercial/044.jpeg",
            "/commercial/055.jpeg",
            "/commercial/1.jpg",
            "/commercial/2.jpg",
            "/commercial/BS_Harfanti.jpg",
            "/commercial/BS_Maria Harfanti.jpg",
            "/commercial/Capture21.JPG",
            "/commercial/Capture28.JPG",
          ]}
        ></CarouselPlugin>
      </div>
    </div>
  );
}
