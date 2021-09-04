import React, { useState, useEffect } from "react";
import Badge from "react-bootstrap/Badge";
import Pagination from "react-bootstrap/Pagination";
import { Link, useHistory } from "react-router-dom";
import { BaseURL } from "../config";

const QuestionsList = ({ page }) => {
  const [questions, setQuestions] = useState([]);

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
  }, [page])
    
  if (questions.questions === undefined || questions.questions.length == 0) {
    return <></>;
  }
    
  return (
    <>
      {questions.questions.map((question, idx) => (
        <div className={ "que-list border-bottom py-3" + (idx == 0 ? " border-top" : "") }>
          <h5><Link to={ "/questions/" + question.id } className="text-decoration-none link-success">{ question.title }</Link></h5>
          <p className="mb-1">{ question.content.length > 140 ? question.content.substr(0, 140) + "..." : question.content }</p>
          <div className="d-flex">
            <div className="d-inline-block tags me-auto"><Badge bg="light" text="dark">{ question.lang }</Badge></div>
            <div className="d-inline-block user_id me-3">by <Link to={ "users/" + question.user_id } className="text-reset">user</Link></div>
            <div className="d-inline-block created_at">{
              question.created_at.substring(0, 10).replace(/:/g, "/") + " " + question.created_at.substr(11, 5)
            }</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default QuestionsList;