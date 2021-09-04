import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useHistory } from "react-router-dom";

const QuestionsDetailPage = () => {
  const history = useHistory();

  return (
    <Container className="my-5">
      <Row className="border-bottom pb-2">
        <Col>
          <h3>質問詳細</h3>
        </Col>
      </Row>
      <Row>
        <Col md={4, { order: "last" }} lg={3} className="sidebar border-start pt-3 pb-5 ps-4 pe-3">
          <h4 className="mt-5">投稿者</h4>
          <p className="text-center"><Link to="/user/123" className="text-reset text-decoration-none">kariuser</Link></p>
          <h4 className="mt-5">言語</h4>
          <p className="text-center">Python3</p>
          <h4 className="mt-5">投稿日時</h4>
          <p className="text-center">2021/09/04 18:36</p>

        </Col>
        <Col md={8} lg={9} className="py-3 pe-5">
          <h4 className="text-center py-5">これができませんあれができません</h4>

          これができません、あれができません。

          <h5>要約</h5>

        </Col>
      </Row>
    </Container>
  );
};

export default QuestionsDetailPage;
