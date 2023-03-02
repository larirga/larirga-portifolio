import { Link, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      </div>
      <div>
      <Switch>
        <Route
          exact
          path="/"
          component={ Home }
          />
        <Route
          exact
          path="/About"
          component={ About }
          />
        <Route
          exact
          path="/Projects"
          component={ Projects }
          />
        <Route
          exact
          path="/Contact"
          component={ Contact }
          />
      </Switch>
      </div>
      <div>
        <footer>
          <p>oi</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
