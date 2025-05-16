"use client";
import { historiaImages } from "../types/historiaImages";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "./ui/card";

const HistoriaCarousel = () => {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 3000 })]}
      className="w-full max-w-sm mx-auto pointer-events-none select-none "
      options={{ loop: true }}
    >
      <CarouselContent>
        {historiaImages.map((src, index) => (
          <CarouselItem key={index} className=" border rounded-xl">  
                        <Card
            className="w-full h-[250px] md:h-[300px]  bg-cover bg-center border-none shadow-none "
            style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_BACKEND_URL}${src})`,
            }}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HistoriaCarousel;
