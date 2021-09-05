import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { BaseURL } from "../config";

const QuestionsCreatePage = () => {
  const [qTitle, setQTitle] = useState("");
  const [qContent, setQContent] = useState("");
  const [qLang, setQLang] = useState("py");
  const [qCode, setQCode] = useState("");
  const [res, setRes] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  const history = useHistory();

  const onSendQuestion = () => {
    setSuccessMessage(() => "");
    setErrorMessage(() => "");

    const obj = {
      question: {
        id: null,
        title: qTitle,
        content: qContent,
        lang: qLang,
        code: qCode,
        user_id: 1,
        created_at: null,
        modified_at: null,
        is_deleted: null
      }
    }

    if (qTitle.replace(/\s/g, "") === "") {
      setErrorMessage(() => "タイトルが空です");
      return;
    }

    if (qContent.replace(/\s/g, "") === "") {
      setErrorMessage(() => "やりたいことが空です");
      return;
    }

    if (qCode.replace(/\s/g, "") === "") {
      setErrorMessage(() => "コードが空です");
      return;
    }

    const method = "POST";
    const body = JSON.stringify(obj);
    const headers = {
        "Accept": "application/json",
        "Content-Type": "text/plain"
    };

    fetch(BaseURL + "api/questions/post.php", {method: method, headers: headers, body: body, mode: "cors"})
    .then(r => r.json())
    .then(data => {
      setRes(data);
      console.log("success!");
      console.log(data);
      console.log(res);
      setQTitle(() => "");
      setQContent(() => "");
      setQCode(() => "");
      if (data.is_successful) {
        setSuccessMessage(() => "質問を投稿しました");
      }
      else {
        setErrorMessage(() => data.error);
      }
      console.log(data);
    }).catch((error) => {
      console.log(error);
    });
  }

  if (!isAuthenticated) {
    return (
      <Container className="my-5">
        <Row className="border-bottom pb-2">
          <Col>
            <h3>質問作成</h3>
          </Col>
        </Row>
      
        <Row className="border-top">
          <Col
            md={4, { order: "last" }} lg={3}
            className="sidebar border-start py-3 ps-3 md-ps-4 pe-3"
          >
          </Col>
          <Col md={8} lg={9} className="que-detail py-3 md-pe-5">
            <h4 className="text-center py-5">
              <span className="page-title pb-1">
                質問する
              </span>
            </h4>
          </Col>
        </Row>

        <Row className="border-top">
          <Col
            md={4, { order: "last" }} lg={3}
            className="sidebar border-start py-3 ps-3 md-ps-4 pe-3"
          >

          </Col>

          <Col md={8} lg={9} className="que-detail py-5 md-pe-5">
            <p>質問するには<a href="" onClick={() => loginWithRedirect()}>ログイン</a>してください</p>
          </Col>
        </Row>

      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row className="border-bottom pb-2">
        <Col>
          <h3>質問作成</h3>
        </Col>
      </Row>
      
      <Row className="border-top">
        <Col
          md={4, { order: "last" }} lg={3}
          className="sidebar border-start py-3 ps-3 md-ps-4 pe-3"
        >
        </Col>
        <Col md={8} lg={9} className="que-detail py-3 md-pe-5">
          <h4 className="text-center py-5">
            <span className="page-title pb-1">
              質問する
            </span>
          </h4>
        </Col>
      </Row>

      <Row className="border-top">
        <Col
          md={4, { order: "last" }} lg={3}
          className="sidebar border-start py-3 ps-3 md-ps-4 pe-3"
        >
        </Col>

        <Col md={8} lg={9} className="que-detail py-5 md-pe-5">
          {successMessage && <Alert variant="success">{successMessage}</Alert>}
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formQTitle">
              <Form.Label column sm={2}>
                タイトル
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  placeholder="質問タイトルを入力"
                  value={qTitle}
                  onChange={(e) => setQTitle(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formQContent">
              <Form.Label column sm={2}>
                やりたいこと
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="textarea"
                  placeholder="〇〇をしたい"
                  value={qContent}
                  style={{ height: '100px' }}
                  onChange={(e) => setQContent(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formCodes">
              <Form.Label column sm={2}>
                コード
              </Form.Label>
              <Col sm={10}>
                <div className="d-flex justify-content-between">
                  <div className="d-inline-block" style={{ width : "50%" }}>
                    <Form.Select
                      className="mb-3"
                      onChange={(e) => setQLang(e.target.value)}
                    >
                      <option value="py">Python3</option>
                      <option value="cpp">C++</option>
                    </Form.Select>
                  </div>
                  <div className="d-inline-block">
                    <Button variant="outline-warning" className="ms-auto">実行</Button>
                  </div>
                </div>
                <Form.Control
                  as="textarea"
                  placeholder="Your code here"
                  className="monospace"
                  value={qCode}
                  style={{ height: '100px' }}
                  onChange={(e) => setQCode(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button
                  variant="success"
                  onClick={onSendQuestion}
                >
                  送信
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>

    </Container>
  );
};

export default QuestionsCreatePage;
