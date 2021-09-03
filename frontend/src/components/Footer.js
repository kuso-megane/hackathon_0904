import React from "react";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";


const Footer = ({ loginInfo }) => {

  return (
    <footer className="border-top bg-light border-dark py-5">
      <Container>
        <Row>
          <Col className="text-center">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px"
              height="40px" viewBox="0 0 140 140">
            <path class="st0" d="M110.97,140H29.03C13,140,0,127,0,110.97V29.03C0,13,13,0,29.03,0h81.95C127,0,140,13,140,29.03v81.95
              C140,127,127,140,110.97,140z"/>
            <g>
              <path class="st1" d="M30.77,53.24l19.75,16.61L30.77,86.49l-4.54-4.63l14.5-11.95l-14.5-12.04L30.77,53.24z"/>
              <path class="st1" d="M53.51,97.83v-5.65h32.99v5.65H53.51z"/>
              <path class="st1" d="M109.23,86.49L89.48,69.85l19.75-16.61l4.57,4.63L99.27,69.79l14.53,12.07L109.23,86.49z"/>
            </g>
            </svg>

            <p className="brand-name fs-5 mt-3 mb-5">MARUNAGE DEBUG</p>
            <p className="my-1">Frontend by <span className="brand-name">Itsuki Takano</span></p>
            <p className="my-1">Backend by <span className="brand-name">Kazuhiro Orita</span></p>
            <p className="my-1">...And made possible by users like <span className="brand-name">you</span>.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
