import React, { useState, useEffect } from "react";
import Badge from "react-bootstrap/Badge";
import Pagination from "react-bootstrap/Pagination";
import { Link, useHistory } from "react-router-dom";
import { BaseURL } from "../config";

const Question = ({ qdata }) => {
  if (qdata === undefined) {
    return <></>;
  }
};

const QuestionsList = ({ page }) => {
  const [questions, setQuestions] = useState([]);
  const history = useHistory();

  const obj = { page: page };

  const method = "POST";
  const body = JSON.stringify(obj);
  const headers = {
      "Accept": "application/json",
      "Content-Type": "text/plain"
  };

  useEffect(() => {
    fetch(BaseURL + "api/questions/_list.php", {method: method, headers: headers, body: body, mode: "cors"})
    .then(res => res.json())
    .then(data => {
      setQuestions(data);
      console.log(data);
    }).catch((error) => {
      console.log(error);
    });
  }, [])
    
  if (questions.questions === undefined || questions.questions.length == 0) {
    return <></>;
  }
  console.log(questions)
    
  return (
    <>
      {questions.questions.map((question) => (
        <div className="que-list border-top py-3">
          <h5><Link to={"/questions/" + question.id} className="text-decoration-none link-success">{question.title}</Link></h5>
          <p className="mb-1">{question.content}</p>
          <div className="d-flex">
            <div className="d-inline-block tags me-auto"><Badge bg="light" text="dark">{question.lang}</Badge></div>
            <div className="d-inline-block user_id me-3">by <Link to={"users/" + question.user_id} className="text-reset">user</Link></div>
            <div className="d-inline-block created_at">{ question.created_at }</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default QuestionsList;