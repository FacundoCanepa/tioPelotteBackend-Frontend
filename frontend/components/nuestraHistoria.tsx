"use client"
import { useRouter } from "next/navigation";
import HistoriaCarousel from "./historiaCarosel";

const NuestraHistoria = () => {
    const router = useRouter()
  return (
    <section className="py-10 px-4">
      <div className="max-w-5xl  mx-auto grid md:grid-cols-2 items-center gap-10 text-center md:text-left ">
        <div className="space-y-6 md:bg-white/20  md:shadow-md md:p-10 md:rounded-lg">
          <h2 className="text-2xl md:text-3xl font-semibold font-garamond italic tracking-wide mb-2">Nuestra Historia</h2>
          <p className="text-sm md:text-base text-stone-700 mb-6 font-garamond">
            Más de 30 años de tradición nos avalan. <br />
            Desde los primeros ravioles de Doña Rosa hasta nuestras pastas frescas de hoy, 
            cada creación está llena de amor y dedicación.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="navbar-secondary font-garamond text-stone-900 font-semibold py-2 px-6 rounded-full shadow-md border border-yellow-600 hover:scale-105 transition-all cursor-pointer" onClick={() => router.push ("/historia")}>
              ver más
            </button>
          </div>
        </div>

        <div className="hidden md:block">
          <HistoriaCarousel />
        </div>
      </div>
    </section>
  );
};

export default NuestraHistoria;
