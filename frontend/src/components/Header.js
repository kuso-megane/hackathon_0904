import React from "react";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserAvatarImage from "./UserAvatarImage";
import { useHistory } from "react-router-dom";


const Header = () => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  const history = useHistory();

  const userMenu =
    isAuthenticated ? (
      <NavDropdown
        size="sm" className="me-3"
        title={<div className="d-inline-block me-2"><UserAvatarImage className="me-2" /> { user.name }</div>}
      >
        <NavDropdown.Item disabled>{ user.email }</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#/action-1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#/action-2">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={() => {logout({ returnTo: window.location.origin });}}>ログアウト</NavDropdown.Item>
      </NavDropdown>
    ) : (
        <Button
          variant="outline-light" size="sm" className="me-2"
          onClick={() => loginWithRedirect()}
        >
          ログイン
        </Button>
    );

  return (
    <header className="border-bottom border-dark">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => history.push("/")} className="brand-name" style={{ cursor: "pointer" }}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px"
              height="24px" viewBox="0 0 140 140">
            <path class="st1" d="M110.97,140H29.03C13,140,0,127,0,110.97V29.03C0,13,13,0,29.03,0h81.95C127,0,140,13,140,29.03v81.95
              C140,127,127,140,110.97,140z"/>
            <g>
              <path class="st0" d="M30.77,53.24l19.75,16.61L30.77,86.49l-4.54-4.63l14.5-11.95l-14.5-12.04L30.77,53.24z"/>
              <path class="st0" d="M53.51,97.83v-5.65h32.99v5.65H53.51z"/>
              <path class="st0" d="M109.23,86.49L89.48,69.85l19.75-16.61l4.57,4.63L99.27,69.79l14.53,12.07L109.23,86.49z"/>
            </g>
            </svg>
            <span className="logo-text ms-2">MARUNAGE DEBUG</span>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav style={{ alignItems: "center" }}>
              {userMenu}
              <Button onClick={() => history.push("/questions/create")} variant="success" size="sm">質問する</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
