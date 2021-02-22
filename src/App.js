import Home from "./components/home"
import CourseManager from "./components/course-manager"
import CourseEditor from "./components/course-editor";
import {BrowserRouter, Route} from "react-router-dom";

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
              <Route path="/editor" render={(props) => <CourseEditor {...props}/>}/>
          </div>
      </BrowserRouter>

  );
}

export default App;
