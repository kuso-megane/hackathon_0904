import React from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import Pagination from "react-bootstrap/Pagination";
import Form from 'react-bootstrap/Form';
import { Link, useHistory } from "react-router-dom";

const QuestionList = () => {
  return (
    <div className="que-list border-top py-3">
      <h5><Link to="/questions/123" className="text-decoration-none link-success">こんなことで困っています</Link></h5>
      <p className="mb-1">こんなものをこんなふうにしたいのですが、どうしてもこんなものがあんなふうに動いてしまって上手くいきません。どうしたら良いですか？...</p>
      <div className="d-flex">
        <div className="d-inline-block tags me-auto"><Badge bg="light" text="dark">Python3</Badge></div>
        <div className="d-inline-block user_id me-3">by <Link to="users/123" className="text-reset">user</Link></div>
        <div className="d-inline-block created_at">2021/09/02 13:10</div>
      </div>
    </div>
  );
};

const TopPage = () => {
  const history = useHistory();

  return (
    <Container className="my-5">
      <Row className="border-bottom pb-2">
        <Col>
          <h3>ここはトップページです</h3>
        </Col>
      </Row>
      <Row>
        <Col md={4, { order: "last" }} lg={3} className="sidebar border-start py-3 ps-4 pe-3">
          <h4 className="mt-5">ようこそ</h4>
          <p><Link to="/login" className="link-success">ログイン</Link>することで質問・解答ができるようになります。はじめましての方は<Link to="/signup" className="link-success">会員登録</Link>！</p>

          <h4 className="mt-5">検索</h4>
          <Form>
            <h5 class="h6" className="mt-4 h6">言語</h5>
            <div>
              <Form.Check
                inline
                label="Python3"
                name="lang"
                type="checkbox"
                id={`lang-py`}
              />
              <Form.Check
                inline
                label="C++"
                name="lang"
                type="checkbox"
                id={`lang-cpp`}
              />
            </div>
            <h5 className="mt-3 h6">回答状況</h5>
            <div>
              <Form.Check
                inline
                label="回答あり"
                name="status"
                type="checkbox"
                id={`status-answered`}
              />
              <Form.Check
                inline
                label="未回答"
                name="status"
                type="checkbox"
                id={`status-unanswered`}
              />
            </div>
          </Form>
        </Col>
        <Col md={8} lg={9} className="py-3 pe-5">
          <h4 className="text-center py-5">新着の質問</h4>
          <QuestionList />
          <QuestionList />
          <QuestionList />
          <QuestionList />
          <QuestionList />
          <QuestionList />
          <QuestionList />
          <QuestionList />
          <QuestionList />
          <QuestionList />

          <Pagination className="justify-content-center my-5">
            <Pagination.First disabled />
            <Pagination.Prev disabled />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>

            <Pagination.Ellipsis disabled />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>

        </Col>
      </Row>
    </Container>
  );
};

export default TopPage;
