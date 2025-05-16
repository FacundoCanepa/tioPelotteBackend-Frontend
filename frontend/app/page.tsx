
import CaroseText from './../components/caroseText';
import FeaturedProducts from './../components/featuredProducts';
import CommentsUser from './../components/commentsUsers';
import NuestraHistoria from '@/components/nuestraHistoria';
import Ubicacion from '@/components/ubicacion';
import RedesSociales from '@/components/redesSociales';
import OfferProducts from './../components/ofertProduct';
import DessertProducts from '@/components/dessertProducts';

export default function Home() {

  return (
    <div>
<CaroseText />

<FeaturedProducts />

<div className="bg-[#FBE0C2] py-8">
  <NuestraHistoria />
</div>

<div className="bg-[#FBE6D4] py-8">
  <OfferProducts />
</div>

<div className="bg-[#FBE0C2] py-8">
  <Ubicacion />
</div>

<div className="bg-[#FBE6D4] py-8">
  <DessertProducts />
</div>

<div className="bg-[#FBE0C2] py-8">
  <CommentsUser />
</div>

<RedesSociales />

    </div>
  )
} 
