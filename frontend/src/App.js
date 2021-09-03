import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopPage from "./pages/TopPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
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
  const [loginInfo, setLoginInfo] = useState({
    state: "",
    userid: "",
  });

  /*
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoginInfo({
          state: "signedin",
          userid: user?.uid || ""
        });
      } else {
        setLoginInfo({ state: "signedout", userid: ""});
      }
    });
  }, []);
  */

  return (
    <Router>
      <div className="page-content">
        <Header loginInfo={loginInfo} />
        <Switch>
          <Route exact path="/">
            <TopPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/mypage">
            <MyPage loginInfo={loginInfo} />
          </Route>
          <Route exact path="/questions">
            <QuestionsListPage />
          </Route>
          <Route exact path="/questions/create">
            <QuestionsCreatePage loginInfo={loginInfo} />
          </Route>
          <Route path="/questions/:id/edit">
            <QuestionsEditPage loginInfo={loginInfo} />
          </Route>
          <Route path="/questions/:id">
            <QuestionsDetailPage loginInfo={loginInfo} />
          </Route>
          <Route path="/answers/:id/edit">
            <AnswersEditPage loginInfo={loginInfo} />
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
