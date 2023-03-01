import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className="App">
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
      </Switch>
    </div>
  );
}

export default App;
