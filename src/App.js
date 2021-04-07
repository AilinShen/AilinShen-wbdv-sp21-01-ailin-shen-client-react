import Home from "./components/home"
import CourseManager from "./components/course-manager"
import CourseEditor from "./components/course-editor";
import {BrowserRouter, Route} from "react-router-dom";
import QuizzesList from "./components/quizzes/quizzes-list";
import Quizz from "./components/quizzes/quizz";

function App() {
  return (
      <BrowserRouter>
          <div className="whole-page">
              <Route path="/" exact={true}>
                  <Home/>
              </Route>
              <Route path="/courses">
                  <CourseManager/>
              </Route>
              <Route path="/courses/:courseId/quizzes" exact={true}>
                  <QuizzesList/>
              </Route>
              <Route path="/courses/:courseId/quizzes/:quizId" exact={true}>
                  <Quizz/>
              </Route>
          </div>
      </BrowserRouter>

  );
}

export default App;
