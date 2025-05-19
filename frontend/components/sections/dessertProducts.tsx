"use client";

import { useGetDessertProducts } from "@/api/useGetDessertProducts";
import { ResponseType } from "@/types/response";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import SkeletonSchema from "../ui/skeletonSchema";
import { ProductType } from "@/types/product";
import { CardContent, Card } from "../ui/card";
import { useRouter } from "next/navigation";
import AnimatedSection from "../ui/AnimatedWrapper";

const DessertProducts = () => {
  const { error, loading, result }: ResponseType = useGetDessertProducts();
  const router = useRouter();

  return (
    <AnimatedSection direction="left" className="py-8">
      <div className="max-w-5x1 md:max-w py-4 mx-auto sm:py-8 sm:px-12 ">
        <div className="flex flex-col items-center">
          <h3 className="font-garamond text-[4vh] md:text-[6vh] sm:pb-1 italic tracking-wide ">
            Dulces y postres
          </h3>
          <h4 className="text-center text-lg font-garamond italic text-stone-600 mb-2  border-b-2 border-dashed border-black/50 md:border-0 ">
            El toque final para tu mesa...
          </h4>
        </div >

        <Carousel className="mt-4 xl:ml-40 xl:mr-40">
          <CarouselContent className="ml-0 flex justify-around">
            {loading && <SkeletonSchema grid={4} />}
            {result !== null &&
              result.map((product: ProductType) => (
                <CarouselItem
                  key={product.id}
                  className="basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 p-2"
                >
                  <Card className="relative w-full h-full bg-transparent border-none overflow-hidden">
                    <div className="absolute inset-0 bg-white/30 backdrop-blur-2xl z-0 rounded-xl" />
                    <CardContent className="relative z-10 flex flex-col items-center text-center gap-3 p-4 h-full">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.img?.[0]?.url}`}
                        alt={product.productName}
                        className="w-full h-40 md:h-48 object-cover rounded-xl shadow-md"
                      />
                      <h1 className="text-sm font-semibold lowercase font-garamond line-clamp-1">
                        {product.productName}
                      </h1>
                      <span className="text-xs font-garamond line-clamp-2">
                        {product.descriptionCorta}
                      </span>
                      <button
                        className="bg-white/50 hover:bg-white text-black py-1 px-4 hover:scale-105 rounded-full shadow-md transition mt-auto cursor-pointer"
                        onClick={() => router.push(`/productos/${product.slug}`)}
                      >
                        VER MÁS
                      </button>
                    </CardContent>
                  </Card>
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

export default DessertProducts;
