import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useHistory } from "react-router-dom";
/* highlight.js */
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/github.css';
import cpp from 'highlight.js/lib/languages/cpp';
hljs.registerLanguage('cpp', cpp);

const QuestionsDetailPage = () => {
  const history = useHistory();

  useEffect(() => {
    hljs.initHighlighting();
    hljs.initHighlighting.called = false;
  });

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
          <p className="text-center">Python3</p>
          <h4 className="mt-5">投稿日時</h4>
          <p className="text-center">2021/09/04 18:36</p>

        </Col>

        <Col md={8} lg={9} className="que-detail pt-3 pb-5 md-pe-5">
          <h4 className="text-center py-5">x の y 乗を計算しようとするとエラーになる</h4>

          <h5>やりたいこと</h5>

          C++で入力から数字を2回受け取り、累乗の計算をしたい。

          <h5>コード</h5>

          <pre><code class="language-cpp hljs">
{`#include <iostream>

int main() {
  std::cin >> x >> y;
  std::cout << x ^ y << std::endl;
}`}
          </code></pre>

        </Col>
      </Row>
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
          <div className="text-center pb-5">{2 + " 件の回答"}</div>
        </Col>
      </Row>
      <Row className="border-top">
        <Col
          md={4, { order: "last" }} lg={3}
          className="sidebar border-start py-3 ps-3 md-ps-4 pe-3"
        >
          <h4 className="mt-5">投稿者</h4>
          <p className="text-center"><Link to="/user/123" className="text-reset text-decoration-none">testuser</Link></p>
          <h4 className="mt-5">投稿日時</h4>
          <p className="text-center">2021/09/04 18:36</p>

        </Col>

        <Col md={8} lg={9} className="que-detail py-5 md-pe-5">
          括弧をつければ動きます。というのも、<code>{`<<`}</code> と <code>{`^`}</code> は両方とも演算子 ( <code>{`+`}</code> や <code>{`/`}</code> などと同じです) なので、これらが変な順序で適用されてしまったのがエラーの原因なのです。よって、括弧をつけて <code>{`x ^ y`}</code> の計算を先に行うようにするとちゃんと動くようになります。

          <h5>コード</h5>

          <pre><code class="language-cpp hljs">
{`#include <iostream>

int main() {
  std::cin >> x >> y;
  std::cout << (x ^ y) << std::endl;
}`}
          </code></pre>
        </Col>

      </Row>
      <Row className="border-top">
        <Col
          md={4, { order: "last" }} lg={3}
          className="sidebar border-start py-3 ps-3 md-ps-4 pe-3"
        >
          <h4 className="mt-5">投稿者</h4>
          <p className="text-center"><Link to="/user/123" className="text-reset text-decoration-none">testuser</Link></p>
          <h4 className="mt-5">投稿日時</h4>
          <p className="text-center">2021/09/04 18:36</p>

        </Col>

        <Col md={8} lg={9} className="que-detail py-5 md-pe-5">
          ところで、<code>{`x ^ y`}</code> ではxとyのXOR (排他的論理和) の計算になってしまいます。累乗の計算にはcmathライブラリの <code>{`std::pow`}</code> 関数を使います。

          <h5>コード</h5>

          <pre><code class="language-cpp hljs">
{`#include <iostream>
#include <cmath>

int main() {
  std::cin >> x >> y;
  std::cout << std::pow(x, y) << std::endl;
}`}
          </code></pre>
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
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                回答文
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="textarea"
                  placeholder="回答文を入力"
                  style={{ height: '100px' }}
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
                      <option>C++</option>
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
                  style={{ height: '100px' }}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button variant="success" type="submit">送信</Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>

    </Container>
  );
};

export default QuestionsDetailPage;
