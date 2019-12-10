import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'


import './index.css'
const Rodape = () => {
  return (
    <MDBFooter color="dark" className="font-small darken-3 pt-0 cor">
        <div className='icones'>
          <a href="https://adrianafernandes.github.io/"> <FontAwesomeIcon icon={faFacebookF} /> </a>
          <a href="https://adrianafernandes.github.io/"> <FontAwesomeIcon icon={faWhatsapp} /> </a>
          <a href="https://adrianafernandes.github.io/"> <FontAwesomeIcon icon={faInstagram} /> </a>
        </div>
    
      <div className="icones2">
          &copy; {new Date().getFullYear()} Copyright: {" "}
          <a className='dev' href="https://adrianafernandes.github.io/"> Adriana Fernandes</a>
      </div>
    </MDBFooter>
  );
}

export default Rodape;