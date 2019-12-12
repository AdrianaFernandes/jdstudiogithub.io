import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacao from '../Home/Navegacao';
import Sobre_Cards from './Cards_Sobre'
import Rodape from '../Home/Rodape'
import Parallax from './Parallax';


function Sobre() {
  return (
    <div>
      <Navegacao/>
      <Parallax/>
      <Sobre_Cards/>
      <Rodape/>
    </div>
  );
}

export default Sobre;