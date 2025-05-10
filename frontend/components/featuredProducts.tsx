"use client";
import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import SkeletonSchema from "./skeletonSchema";
import { ProductType } from "@/types/product";
import { CardContent , Card } from "./ui/card";

const featuredProducts = () => {
  const { error, loading, result }: ResponseType = useGetFeaturedProducts();
  console.log(result)
  return (
    <div className="max-w-6x1 py-4 mx-auto sm:py-16 sm:px-24">
      <div className="flex justify-center ">
        <h3 className=" font-garamond text-[4vh] md:text-[6vh] sm:pb-8 italic tracking-wide border-b-2  border-dashed border-black/50 ">
          Productos destacados
        </h3>
      </div>

      <Carousel>
          <CarouselContent className="ml-0 grid grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
          {loading && <SkeletonSchema grid={4} />}
          {result !== null &&
            result.map((product: ProductType) => (
              <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 group">
                <div className="p-1">
                  <Card className=" shadow-none border-none">
                    <CardContent className="flex flex-col items-center text-center gap-4 py-4">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.img?.[0]?.url}`}
                        alt={product.productName}
                        className="w-[150px] h-[150px] object-cover rounded-2xl shadow-lg"
                      />
                      <h1 className="text-sm font-semibold lowercase">{product.productName}</h1>
                      <button className="bg-yellow-300 hover:bg-yellow-400 text-black py-1 px-4 rounded-full shadow-md transition">
                        VER MÁS
                      </button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default featuredProducts;
