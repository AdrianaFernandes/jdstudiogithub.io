import React from 'react';
import Navegacao from '../Home/Navegacao';
import CardsSobre from './CardsSobre'
import Rodape from '../Home/Rodape'
import Parallax from './Parallax';

import './index.css'

function Sobre() {
  return (
    <div>
      <Navegacao/>
      <Parallax/>
      <CardsSobre/>
      <Rodape/>
    </div>
  );
}

export default Sobre;