import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useHistory } from "react-router-dom";
import { BaseURL, ToLangName } from "../config";
import { useParams } from "react-router-dom";
/* highlight.js */
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/github.css';
import cpp from 'highlight.js/lib/languages/cpp';
hljs.registerLanguage('cpp', cpp);

const QuestionsDetailPage = () => {
  const [qTitle, setQTitle] = useState("");
  const [qContent, setQContent] = useState("");
  const [qLang, setQLang] = useState("py");
  const [qCode, setQCode] = useState("");
  const [res, setRes] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [detail, setDetail] = useState([]);
  const { id = "1" } = useParams();

  let posted = false;

  const obj = { question_id: id }

  const method = "POST";
  const body = JSON.stringify(obj);
  const headers = {
      "Accept": "application/json",
      "Content-Type": "text/plain"
  };

  useEffect(() => {
    fetch(BaseURL + "api/questions/detail.php", {method: method, headers: headers, body: body, mode: "cors"})
    .then(res => res.json())
    .then(data => {
      setDetail(data);
      console.log(data);
    }).catch((error) => {
      console.log(error);
    });
  }, [id, posted])

    const onSendQuestion = () => {
    setSuccessMessage(() => "");
    setErrorMessage(() => "");

    const obj2 = {
      answer: {
        id: null,
        title: qTitle,
        content: qContent,
        lang: qLang,
        code: qCode,
        user_id: 1,
        question_id: id,
        created_at: null,
        modified_at: null,
        is_deleted: null
      }
    }

    if (qContent.replace(/\s/g, "") === "") {
      setErrorMessage(() => "回答文が空です");
      return;
    }

    if (qCode.replace(/\s/g, "") === "") {
      setErrorMessage(() => "コードが空です");
      return;
    }

    const method = "POST";
    const body = JSON.stringify(obj2);
    const headers = {
        "Accept": "application/json",
        "Content-Type": "text/plain"
    };

    fetch(BaseURL + "api/answers/post.php", {method: method, headers: headers, body: body, mode: "cors"})
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
        setSuccessMessage(() => "回答を投稿しました");
        posted = true;
      }
      else {
        setErrorMessage(() => data.error);
      }
      console.log(data);
    }).catch((error) => {
      console.log(error);
    });
  }
  
  useEffect(() => {
    hljs.initHighlighting();
    hljs.initHighlighting.called = false;
  });
  
  if (detail.question === undefined || detail.question.length == 0) {
    return <></>;
  }

  return (
    <Container className="my-5">
      <Row className="border-bottom pb-2">
        <Col>
          <h3>質問詳細</h3>
        </Col>
      </Row>
      <Row>
        <Col
          md={4, { order: "last" }} lg={3}
          className="sidebar border-start pt-3 pb-5 ps-3 md-ps-4 pe-3"
        >
          <h4 className="mt-5">投稿者</h4>
          <p className="text-center"><Link to="/user/123" className="text-reset text-decoration-none">testuser</Link></p>
          <h4 className="mt-5">言語</h4>
          <p className="text-center">{ ToLangName(detail.question.lang) }</p>
          <h4 className="mt-5">投稿日時</h4>
          <p className="text-center">{ detail.question.created_at }</p>

        </Col>

        <Col md={8} lg={9} className="que-detail pt-3 pb-5 md-pe-5">
          <h4 className="text-center py-5">{ detail.question.title }</h4>

          <h5>やりたいこと</h5>
          {detail.question.content}
          
          <div className="d-flex align-items-end justify-content-between">
            <div className="d-inline-block" style={{ width : "50%" }}>
              <h5>コード</h5>
            </div>
            <div className="d-inline-block">
              <Button variant="outline-warning" className="ms-auto" type="submit">実行</Button>
            </div>
          </div>

          <pre><code class={"language-" + detail.question.lang + " hljs"}>
            {`${detail.question.code}`}
          </code></pre>

        </Col>
      </Row>
      {detail.answers.length > 0 &&
      <>
        <Row className="border-top">
          <Col
            md={4, { order: "last" }} lg={3}
            className="sidebar border-start py-3 ps-3 md-ps-4 pe-3"
          >
          </Col>
          <Col md={8} lg={9} className="que-detail py-3 md-pe-5">
            <h4 className="text-center pt-5">
              <span className="page-title pb-1">
                回答一覧
              </span>
            </h4>
            <div className="text-center pb-5">{String(detail.answers.length) + " 件の回答"}</div>
          </Col>
        </Row>
        
        {detail.answers.map((ans) => (
          <Row className="border-top">
            <Col
              md={4, { order: "last" }} lg={3}
              className="sidebar border-start py-5 ps-3 md-ps-4 pe-3"
            >
              <h4>投稿者</h4>
              <p className="text-center"><Link to="/user/123" className="text-reset text-decoration-none">testuser</Link></p>
              <h4 className="mt-5">投稿日時</h4>
              <p className="text-center">{ans.created_at}</p>

            </Col>

            <Col md={8} lg={9} className="que-detail py-5 md-pe-5">
              {ans.content}

              <div className="d-flex align-items-end justify-content-between">
                <div className="d-inline-block" style={{ width : "50%" }}>
                  <h5>コード</h5>
                </div>
                <div className="d-inline-block">
                  <Button variant="outline-warning" className="ms-auto" type="submit">実行</Button>
                </div>
              </div>

              <pre><code class={"language-" + detail.question.lang + " hljs"}>
                {`${ans.code}`}
              </code></pre>
            </Col>
          </Row>
        ))}
        
      </>
      }

      <Row className="border-top">
        <Col
          md={4, { order: "last" }} lg={3}
          className="sidebar border-start py-3 ps-3 md-ps-4 pe-3"
        >
        </Col>
        <Col md={8} lg={9} className="que-detail py-3 md-pe-5">
          <h4 className="text-center py-5">
            <span className="page-title pb-1">
              回答する
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
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                回答文
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="textarea"
                  placeholder="回答文を入力"
                  value={qContent}
                  style={{ height: '100px' }}
                  onChange={(e) => setQContent(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                コード
              </Form.Label>
              <Col sm={10}>
                <div className="d-flex justify-content-between">
                  <div className="d-inline-block" style={{ width : "50%" }}>
                    <Form.Select disabled className="mb-3">
                      <option value={detail.question.lang}> {ToLangName(detail.question.lang)} </option>
                    </Form.Select>
                  </div>
                  <div className="d-inline-block">
                    <Button variant="outline-warning" className="ms-auto" type="submit">実行</Button>
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

export default QuestionsDetailPage;
