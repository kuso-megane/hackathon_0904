import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";
import Form from "react-bootstrap/Form";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import QuestionsList from "../components/QuestionsList";
import PaginationSet from "../components/PaginationSet";


const TopPage = () => {
  // Auth0 の提供するフック
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
  // react-router のページ遷移などに使うフック
  const history = useHistory();
  // /questions/page/:num の numの部分
  // デフォルト値は "1"
  const { num = "1" } = useParams();


  return (
    <Container className="my-5">
      <Row className="border-bottom pb-2">
        <Col>
          <h3>ここはトップページです</h3>
        </Col>
      </Row>
      <Row>
        <Col
          md={4, { order: "last" }} lg={3}
          className="sidebar border-start py-3 ps-4 pe-3"
        >
          <h4 className="mt-5">ようこそ</h4>
          <p>
            <a
              href=""
              onClick={() => loginWithRedirect()}
              className="link-success"
            >
              ログイン・会員登録
            </a>
            すると、質問・解答ができるようになります！
          </p>

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
          {num == "1" ? (
            <h4 className="text-center py-5">
              <span className="page-title pb-1">
                新着の質問
              </span>
            </h4>
          ) : (
            <>
              <h4 className="text-center pt-5">
                <span className="page-title pb-1">
                  質問一覧
                </span>
              </h4>
              <div className="text-center pb-5">{String(num) + " ページ目"}</div>
            </>
          )}

          <QuestionsList page={num} />

          <PaginationSet
            currentPage={Number(num)}
            totalPage={10}
            onClickEvent={(p) => history.push("/questions/page/" + p)}
          />

        </Col>
      </Row>
    </Container>
  );
};

export default TopPage;
