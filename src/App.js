import "./styles.css";
import Connections from "./components/Connections";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Tms from "./components/Tms";
import Skills from "./components/Skills";
import Academics from "./components/Academics";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EachCourse from "./components/EachCourse";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Connections />
        <div className="content">
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Skills">
              <Skills />
            </Route>
            <Route path="/Academics">
              <Academics />
            </Route>
            <Route path="/Projects">
              <Projects />
            </Route>
            <Route exact path="/Courses">
              <Courses />
            </Route>
            <Route path="/Courses/:id">
              <EachCourse />
              <Courses />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>

            <Route path="/Tms">
              <Tms />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
