
import CaroseText from './../components/caroseText';
import FeaturedProducts from './../components/featuredProducts';
import CommentsUser from './../components/commentsUsers';
import NuestraHistoria from '@/components/nuestraHistoria';
import Ubicacion from '@/components/ubicacion';
import RedesSociales from '@/components/redesSociales';

export default function Home() {

  return (
    <div>
      <CaroseText/>
      <FeaturedProducts/>
      <NuestraHistoria/>
      <Ubicacion/>
      <CommentsUser/>
      <RedesSociales/>
    </div>
  )
} 
