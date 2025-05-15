"use client";
import { useRouter } from "next/navigation";

const MenuList = () => {
  const router = useRouter();

  return (
    <nav className=" font-garamond absolute top-full left-0 w-full  py-4 flex flex-col items-center gap-3  animate-fade-in navbar-tercero md:left-1/2 md:-translate-x-1/2 md:w-[50vw] md:pb-[2vw] md:pt-[2vw] md:gap-[3vw] md:rounded-b-4xl">
      {[
        { text: "Home", href: "/" },
        { text: "Productos", href: "/products" },
        { text: "Ubicación", href: "/ubicacion" },
        { text: "Ofertas", href: "/ofertas" },
        { text: "Nuestra historia", href: "/historia" },
      ].map(({ text, href }) => (
        <div
          key={text}
          onClick={() => router.push(href)}
          className="w-[60vw] md:w-[20vw] border-b-2 border-black/20 flex justify-center cursor-pointer hover:underline"
        >
          <span className="text-[6vw] md:text-[2vw] select-none ">{text}</span>
        </div>
      ))}
    </nav>
  );
};

export default MenuList;
