import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacao from './Home/Navegacao';
import CarouselPrincipal from './Home/CarouselPrincipal';
import Rodape from './Home/Rodape'
import './App.css';

function App() {
  return (
    <div>
      <Navegacao/>
      <CarouselPrincipal/>
      <Rodape/>
    </div>
  );
}

export default App;
