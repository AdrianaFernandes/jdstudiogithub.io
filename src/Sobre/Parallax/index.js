import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import './index.css';

function Parallax() {
    return (
        <Container>
            <div class="parallax">
            
            <h1>Nossa História<p className='text_sobre'>Formados na área de beleza desde 2008, os sócios Rogerio e Diovani cruzaram suas jornadas de trabalho em 2012, onde estreitaram seus laços de amizade e profissional, levando-os a fundar, em dezembro de 2014, o JD Studio.
            <p>O salão iniciou com apenas dois cabeleireiros e uma manicure cresceu e atualmente oferece também serviços de estética, depilação e dia da noiva, entre outros.</p>
            <p>Utilizando profissionais altamente qualificados, que passam por reciclagem a cada 6 meses, oferecendo, assim, atendimento personalizado a cada cliente.</p>
            <p>O JD Studio tem como missão trazer à sua clientela a excelência máxima em beleza, aliada ao conforto e satisfação de todos que confiarem em seus serviços.</p>
            <p>Acreditamos que mais do que prestar um serviço, nós realizamos sonhos, trazemos à tona a beleza das pessoas e, assim, participamos de suas histórias.</p>
            </p>
            </h1></div>
            
        </Container>
    );
}

export default Parallax;