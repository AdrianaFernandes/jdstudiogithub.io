import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../assests/img/logo.jpg'
import Image from 'react-bootstrap/Image'
import './index.css';

class Navegacao extends Component {
    // constructor() {
    //     super();
    // }
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Image className="logo" src={Logo} fluid />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className='nav_mae'   >
                            <Nav className="mr-auto">
                                <Nav.Link className='menu' href="/">Home</Nav.Link>
                                <Nav.Link className='menu' href="servicos">Serviços</Nav.Link>
                                <Nav.Link className='menu' href="sobre-equipe">Sobre-Equipe</Nav.Link>
                                <Nav.Link className='menu' href="contato">Contato</Nav.Link>

                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        )
    }

}
export default Navegacao

