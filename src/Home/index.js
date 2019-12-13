import React from 'react';
import Navegacao from './Navegacao';
import CarouselPrincipal from './CarouselPrincipal';
import Rodape from './Rodape'


function Home() {
  return (
    <div>
      <Navegacao/>
      <CarouselPrincipal/>
      <Rodape/>
    </div>
  );
}

export default Home;