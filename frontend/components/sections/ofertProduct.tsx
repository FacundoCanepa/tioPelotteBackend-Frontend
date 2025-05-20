"use client";

import { useGetOfferProducts } from "@/api/useGetOfertProducts";
import { ResponseType } from "@/types/response";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import SkeletonSchema from "../ui/skeletonSchema";
import { ProductType } from "@/types/product";
import AnimatedSection from "../ui/AnimatedWrapper";
import OfferProductCard from "../carosel/OfferProductCard"; // Ajustá la ruta si es necesario

const OfferProducts = () => {
  const { error, loading, result }: ResponseType = useGetOfferProducts();

  return (
    <AnimatedSection direction="right">
      <div className="max-w-5x1 md:max-w py-4 mx-auto sm:py-8 sm:px-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-10 pb-4">
          <div className="text-center">
            <h3 className="font-garamond text-[4vh] md:text-[6vh] italic tracking-wide">
              Ofertas imperdibles
            </h3>
            <p className="text-stone-600 italic font-garamond text-lg mt-1">
              Productos seleccionados con descuento especial
            </p>
          </div>
        </div>
        <Carousel className="mt-4 xl:ml-40 xl:mr-40">
          <CarouselContent className="ml-0 flex justify-around">
            {loading && <SkeletonSchema grid={4} />}
            {result !== null &&
              result.map((product: ProductType) => (
                <CarouselItem
                  key={product.id}
                  className="basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 p-2"
                >
                  <OfferProductCard product={product} />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex cursor-pointer" />
          <CarouselNext className="hidden md:flex cursor-pointer" />
        </Carousel>
      </div>
    </AnimatedSection>
  );
};

export default OfferProducts;
