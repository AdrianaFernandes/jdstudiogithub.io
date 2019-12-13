import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
// import { MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import Image from 'react-bootstrap/Image'
import Diovani from '../../assests/img/Equipe/Diovani.jpg'
import Rogerio from '../../assests/img/Equipe/Junior.jpg'
import Karina from '../../assests/img/Equipe/Karina.jpg'
import Jessica from '../../assests/img/Equipe/Jessica.jpg'
import Douglas from '../../assests/img/Equipe/Dodo.jpg'

import './index.css';


const TeamPage = () => {
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

export default TeamPage;

{/* <MDBCard className="caixa">

  <h2 className="h1-responsive font-weight-bold my-5">
  Nossa incrível equipe
  </h2>
  <MDBRow>
    <MDBCol md="4" className="mb-md-0 mb-5">

      <Image tag="img" className="rounded z-depth-1-half img-fluid imagens" src={Diovani} alt="Diovani" />
      <h4 className="font-weight-bold dark-grey-text my-4">
        Diovani
      </h4>
      <h6 className="text-uppercase grey-text mb-3">Proprietário | Cabeleireiro | Maquiador </h6>
    </MDBCol>

    <MDBCol md="4" className="mb-md-0 mb-5">
    <Image tag="img" className="rounded z-depth-1-half img-fluid imagens" src={Rogerio} alt="Rogerio" />
      <h4 className="font-weight-bold dark-grey-text my-4">Rogerio</h4>
      <h6 className="text-uppercase grey-text mb-3">
      Proprietário | Gerente | Cabeleireiro
      </h6>
    </MDBCol>

    <MDBCol md="4" className="mb-md-0 mb-5">
    <Image tag="img" className="rounded z-depth-1-half img-fluid imagens" src={Karina} alt="Karina" />
      <h4 className="font-weight-bold dark-grey-text my-4">
        Karina
      </h4>
      <h6 className="text-uppercase grey-text mb-3">Esteticista | Manicure</h6>
    </MDBCol>
    
    <MDBCol md="4" className="mb-md-0 mb-5">
    <Image tag="img" className="rounded z-depth-1-half img-fluid imagens" src={Jessica} alt="Jessica" />
      <h4 className="font-weight-bold dark-grey-text my-4">
        Jessica
      </h4>
      <h6 className="text-uppercase grey-text mb-3">Manicure | Depiladora</h6>
    </MDBCol>
    <MDBCol md="4" className="mb-md-0 mb-5">
    <Image tag="img" className="rounded z-depth-1-half img-fluid imagens" src={Douglas} alt="Douglas" />
      <h4 className="font-weight-bold dark-grey-text my-4">
        Douglas
      </h4>
      <h6 className="text-uppercase grey-text mb-3">Cabeleireiro</h6>
    </MDBCol>
  </MDBRow>

</MDBCard> */}