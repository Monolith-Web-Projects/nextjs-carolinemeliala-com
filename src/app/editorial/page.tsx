import { CarouselPlugin } from "@/components/custom/CarouselPlugin";

export default function Editorial() {
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="w-screen h-fit sm:w-5/6">
        <CarouselPlugin
          images={[
            "/editorial/152-1573.jpg",
            "/editorial/Capture.JPG",
            "/editorial/Capture10.JPG",
            "/editorial/Capture13.JPG",
            "/editorial/Capture16.JPG",
            "/editorial/Capture17.JPG",
            "/editorial/Capture18.JPG",
            "/editorial/Capture20.JPG",
            "/editorial/Capture24.JPG",
            "/editorial/Capture3.JPG",
            "/editorial/Capture7.JPG",
            "/editorial/Style_Spotlight.jpg",
            "/editorial/Style_Spotlight2.jpg",
          ]}
        ></CarouselPlugin>
      </div>
    </div>
  );
}
