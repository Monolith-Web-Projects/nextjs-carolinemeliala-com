import { CarouselPlugin } from "@/components/custom/CarouselPlugin";

export default function Home() {
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <h1>MAIN CONTENT</h1>
      <div className="border-8 w-screen h-fit sm:w-3/4">
        <CarouselPlugin
          images={[
            "/muse.png",
            "/muse.png",
            "/muse.png",
            "/muse.png",
            "/muse.png",
            "/muse.png",
          ]}
        ></CarouselPlugin>
      </div>
    </div>
  );
}
