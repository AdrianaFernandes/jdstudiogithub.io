import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import { Card, Container } from 'react-bootstrap'
import Cabelos from '../../assests/img/servicos/cabelo1.jpg'
import Maquiagem from '../../assests/img/servicos/Maquiagem.jpg'
import EsteticaFacial from '../../assests/img/servicos/estetica facial.jpg'
import Manicure from '../../assests/img/servicos/Manicure.jpg'
import Noiva from '../../assests/img/servicos/noiva.jpg'
import Debutante from '../../assests/img/servicos/Debutante.jpg'
import Massagem from '../../assests/img/servicos/massagem.jpg'
import Whatsapp from '../../assests/img/whats.jpeg'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import './index.css';


function Cards() {
    return (
        <Container className="box-cards">
            <div className='cards-group'>
                <Card style={{ width: '18rem' }} className='box'>
                    <Card.Img variant="top" className='imagens1' src={Cabelos} alt="Dia da Noiva" />
                    <Card.Body className='text1'>
                        <Card.Title>Cabelos</Card.Title>
                        <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511958183298" target="#"><Image className="whatsapp" src={Whatsapp} fluid /></a>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='box'>
                    <Card.Img variant="top" className='imagens1' src={Maquiagem} alt="Dia da Noiva" />
                    <Card.Body className='text1'>
                        <Card.Title>Maquiagem</Card.Title>
                        <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511958183298" target="#"><Image className="whatsapp" src={Whatsapp} fluid /></a>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='box'>
                    <Card.Img variant="top" className='imagens1' src={EsteticaFacial} alt="Dia da Noiva" />
                    <Card.Body className='text1'>
                        <Card.Title>Éstetica Facial</Card.Title>
                        <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511958183298" target="#"><Image className="whatsapp" src={Whatsapp} fluid /></a>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='box'>
                    <Card.Img variant="top" className='imagens1' src={Manicure} alt="Dia da Noiva" />
                    <Card.Body className='text1'>
                        <Card.Title>Mãos e Pés</Card.Title>
                        <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511958183298" target="#"><Image className="whatsapp" src={Whatsapp} fluid /></a>
                    </Card.Body>
                </Card>
            </div>
            <div className='cards-group'>
                <Card style={{ width: '18rem' }} className='box'>
                    <Card.Img variant="top" className='imagens1' src={Noiva} alt="Dia da Noiva" />
                    <Card.Body className='text1'>
                        <Card.Title>Dia da Noiva</Card.Title>
                        <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511958183298" target="#"><Image className="whatsapp" src={Whatsapp} fluid /></a>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='box'>
                    <Card.Img variant="top" className='imagens1' src={Debutante} alt="Dia da Noiva" />
                    <Card.Body className='text1'>
                        <Card.Title>Debutante</Card.Title>
                        <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511958183298" target="#"><Image className="whatsapp" src={Whatsapp} fluid /></a>
                    </Card.Body>
                </Card>
                {/* <Card style={{ width: '18rem' }} className='box'>
                    <Card.Img variant="top" className='imagens1' src={Noiva} alt="Dia da Noiva" />
                    <Card.Body className='text1'>
                        <Card.Title>Éstetica</Card.Title>
                        <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511958183298" target="#"><Image className="whatsapp" src={Whatsapp} fluid /></a>
                    </Card.Body>
                </Card> */}
                <Card style={{ width: '18rem' }} className='box'>
                    <Card.Img variant="top" className='imagens1' src={Massagem} alt="Dia da Noiva" />
                    <Card.Body className='text1'>
                        <Card.Title>Éstetica Corporal</Card.Title>
                        <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511958183298" target="#"><Image className="whatsapp" src={Whatsapp} fluid /></a>
                    </Card.Body>
                </Card>
            </div>
        </Container>

    );
}

export default Cards;