import CaroseText from "../components/sections/caroseText";
import FeaturedProducts from "../components/sections/featuredProducts";
import NuestraHistoria from "../components/sections/nuestraHistoria";
import OfferProducts from "../components/sections/ofertProduct";
import Ubicacion from "../components/sections/ubicacion";
import DessertProducts from "../components/sections/dessertProducts";
import CommentsUser from "../components/sections/commentsUsers";
import RedesSociales from "../components/sections/redesSociales";

export default function Home() {
  return (
    <div>
      <CaroseText />
      <FeaturedProducts />
      <NuestraHistoria />
      <OfferProducts />
      <Ubicacion />
      <DessertProducts />
      <CommentsUser />
      <RedesSociales />
    </div>
  );
}
