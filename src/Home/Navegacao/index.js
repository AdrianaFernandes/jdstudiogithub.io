import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../assests/img/logo.jpg'
import Image from 'react-bootstrap/Image'
import './index.css';

class Navegacao extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Image className="logo" src={Logo} fluid/>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='menu'>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="servicos">Serviços</Nav.Link>
                            <Nav.Link href="sobre-equipe">Sobre-Equipe</Nav.Link>
                            <Nav.Link href="agendamento">Agendamento-Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        )
    }

}

export default Navegacao