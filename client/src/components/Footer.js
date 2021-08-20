import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css';
import {FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";

const FooterPage = () => {
  return (
    <MDBFooter color="white"  className="font-small pt-4 mt-0">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Nawaabi Zaika</h5>
            <p>
                This is a food ordering website that allows to order food from top quality food corner from Lucknow 
            </p>
            <h6 >Enjoy Ordering!</h6>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Connect Me</h5>
            <MDBRow><ul>
            
              <li className="list-unstyled">
                <a href="#!"><FaGithub size={30} />GitHub</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><FaLinkedin  size={30}/><span></span>LinkedIn</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><FaInstagram size={30} />Instagram</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"></a>
              </li>
              
            </ul></MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#"> Ayush Pal</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;