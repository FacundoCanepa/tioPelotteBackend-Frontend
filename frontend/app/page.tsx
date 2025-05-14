
import CaroseText from './../components/caroseText';
import FeaturedProducts from './../components/featuredProducts';
import CommentsUser from './../components/commentsUsers';
import NuestraHistoria from '@/components/nuestraHistoria';
import Ubicacion from '@/components/ubicacion';

export default function Home() {

  return (
    <div>
      <CaroseText/>
      <FeaturedProducts/>
      <CommentsUser/>
      <NuestraHistoria/>
      <Ubicacion/>
    </div>
  )
} 
