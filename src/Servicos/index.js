import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacao from '../Home/Navegacao';
import Cards from './Cards'
import Rodape from '../Home/Rodape'


function Servicos() {
  return (
    <div>
      <Navegacao/>
      <Cards/>
      <Rodape/>
    </div>
  );
}

export default Servicos;