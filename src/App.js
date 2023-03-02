import { Link, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import header_image from './images/header_image.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
      <nav className="nav-header">
        <div className="header-image">
          <Link to="/">
          <img className="header-image" src={ header_image } alt="computer" />
          </Link>
        </div>
        <ul>
          {/* <li>
          <img className="header-image" src={ header_image } alt="computer" />
          </li> */}
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/About">about</Link>
          </li>
          <li>
            <Link to="/Projects">projects</Link>
          </li>
          <li>
            <Link to="/Contact">contact</Link>
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
        <footer className='footer-div'>
        <p>Created by: <a href="https://github.com/larirga" target="_blank" rel="noopener noreferrer"><b>Larissa 💜 </b></a></p>
        </footer>
      </div>
    </div>
  );
}

export default App;
