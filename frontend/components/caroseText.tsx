    "use client"
    import { useRouter } from 'next/navigation';
    import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
    import { Card, CardContent } from './ui/card';
    import Autoplay from 'embla-carousel-autoplay';

    export const datacaroseltop = [
        {
        id: 1,
        title: "Pastas caseras todos los días",
        description: "Frescas, artesanales y con ingredientes de primera calidad.",
        img: "/img/photo-1465911817134-741b5e473a1b.avif", // cambiá esto por la ruta real de tu imagen
        link: "/productos"
        },
        {
        id: 2,
        title: "Envíos a tu casa",
        description: "Realizá tu pedido online y recibilo en Abasto, Olmos, Los Hornos y Etcheverry.",
        img: "/img/photo-1563599175592-c58dc214deff.jpg",
        link: "/productos"
        },
        {
        id: 3,
        title: "¡Conocé nuestras ofertas!",
        description: "Descubrí los combos y descuentos semanales. Solo en tienda online.",
        img: "/img/photo-1556761223-4c4282c73f77.jpg",
        link: "/productos"
        },
        {
        id: 4,
        title: "Nuestra historia",
        description: "Desde hace años, llevando el sabor del pueblo a tu mesa.",
        img: "/img/photo-1465911817134-741b5e473a1b.avif",
        link: "/nosotros"
        }
    ];
    

    const CaroseText = () => {
        const router = useRouter();
                        return (
                    <div>
                      <Carousel plugins={[ Autoplay({ delay: 2500}) ]} className="w-full max-w-[100vw] mx-auto "
                    > <CarouselContent>
                    {datacaroseltop.map(({id,title ,img , link ,description}) => (
                    <CarouselItem className="cursor-pointer" key={id} onClick={() => router.push(link)}>
                    <div>
                      <Card
                        className="shadow-none border-none bg-cover bg-center h-[15vh] md:h-[25vh] p-0 rounded-none "
                         style={{ backgroundImage: `url(${img})` }}
                      >
                        <CardContent className="flex flex-col justify-center items-center text-center h-full  text-white bg-black/30">
                            <h2 className="text-lg md:text-6xl font-bold font-garamond italic mb-3">{title}</h2>
                            <p className="text-xs  md:text-3xl font-light font-garamond italic mb-3">{description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>    
                    ))}
                </CarouselContent>
            </Carousel>

        </div>
    )
    }

    export default CaroseText