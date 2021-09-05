import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopPage from "./pages/TopPage";
import MyPage from "./pages/MyPage";
import QuestionsListPage from "./pages/QuestionsListPage";
import QuestionsCreatePage from "./pages/QuestionsCreatePage";
import QuestionsEditPage from "./pages/QuestionsEditPage";
import QuestionsDetailPage from "./pages/QuestionsDetailPage";
import AnswersEditPage from "./pages/AnswersEditPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";
import "./styles/svg.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="page-content">
        <Header />
        <Switch>
          <Route exact path="/">
            <TopPage />
          </Route>
          <Route path="/mypage">
            <MyPage />
          </Route>
          <Route exact path="/questions">
            <QuestionsListPage />
          </Route>
          <Route exact path="/questions/create">
            <QuestionsCreatePage />
          </Route>
          <Route path="/questions/:id/edit">
            <QuestionsEditPage />
          </Route>
          <Route path="/questions/:id">
            <QuestionsDetailPage />
          </Route>
          <Route path="/answers/:id/edit">
            <AnswersEditPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
