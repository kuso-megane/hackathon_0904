import React from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();

  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col className="mx-3">
          <h3>ここはログインページです</h3>
          <hr />
          <p>およよよ。</p>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
