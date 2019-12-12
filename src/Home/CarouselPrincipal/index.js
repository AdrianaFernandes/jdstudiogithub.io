import React from 'react';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Cabelo_Grande from '../../assests/img/Cabelo_Grande.png';
import Unha from '../../assests/img/Unha.png';
import Cabelo_Curto from '../../assests/img/Cabelo_Curto.png';
import Sobrancelha from '../../assests/img/Sobrancelha.png';

import './index.css';

function CarouselPrincipal() {
  return (
    <div className='container-carrossel'>
      <Carousel>
        <Carousel.Item>
          <Image className="d-block w-100" src={Cabelo_Grande} alt="Cabelos Grandes" />
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100" src={Unha} alt="Unhas" />
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100" src={Cabelo_Curto} alt="Cabelos Curtos" />
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100" src={Sobrancelha} alt="Sobrancelha" />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
export default CarouselPrincipal