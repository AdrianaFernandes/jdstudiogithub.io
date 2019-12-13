import React from 'react';
import Container from 'react-bootstrap/Container'
// import { MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import Image from 'react-bootstrap/Image'
import Diovani from '../../assests/img/Equipe/Diovani.jpg'
import Rogerio from '../../assests/img/Equipe/Junior.jpg'
import Karina from '../../assests/img/Equipe/Karina.jpg'
import Jessica from '../../assests/img/Equipe/Jessica.jpg'
import Douglas from '../../assests/img/Equipe/Dodo.jpg'

import './index.css';


const CardsSobre = () => {
  return (

    <Container className="caixa">
      <main className="title">
        <h2 className="text">
          Nossa Incrível Equipe
          </h2></main>

      <header>
        <section className='box-cards'>
        <div className='box1'>

          <div className="box">
            <Image tag="img" className="imagens" src={Diovani} alt="Diovani" />
            <h4> Diovani </h4>
            <h6>Proprietário | Cabeleireiro | Maquiador </h6>
          </div>

          <div className="box">
            <Image tag="img" className="imagens" src={Rogerio} alt="Rogerio" />
            <h4>Rogerio</h4>
            <h6> Proprietário | Gerente | Cabeleireiro </h6>
          </div>
        </div>

        <div className='box1'>

          <div className="box">
            <Image tag="img" className="imagens" src={Karina} alt="Karina" />
            <h4> Karina </h4>
            <h6>Esteticista | Manicure</h6>
          </div>

          <div className="box">
            <Image tag="img" className="imagens" src={Jessica} alt="Jessica" />
            <h4> Jessica </h4>
            <h6>Manicure | Depiladora</h6>
          </div>

          <div className="box">
            <Image tag="img" className="imagens" src={Douglas} alt="Douglas" />
            <h4> Douglas </h4>
            <h6>Cabeleireiro</h6>
          </div>

        </div>

        </section>
      </header>
    </Container>
  );
}

export default CardsSobre;
