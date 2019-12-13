import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'



function Agendamento() {
    return (
        <Container>
            <div className='contato'>
                <h2>Contato</h2>
                <p>Telefone: (11) 95818-3298</p>
                <p>E-mail: <a target="_blank" href="mailto:jdstudio.belezaltda@gmail.com">jdstudio.belezaltda@gmail.com</a></p>
                <p>Facebook: <a target="_blank"
                    href="https://www.facebook.com/JDstudiolapa/">@studiolilianseraos</a></p>
                <p>Instagram: <a target="_blank"
                    href="https://www.instagram.com/jd.studio/">@studio_lilian_seraos</a></p>
            </div>
        </Container>
    );
}

export default Agendamento;

