import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacao from '../Home/Navegacao';
import Agendamento from './Agendamento';
import Rodape from '../Home/Rodape'

function Contato() {
  return (
    <div>
      <Navegacao/>
      <Agendamento/>
      <Rodape/>
    </div>
  );
}

export default Contato;