import './App.css';
import Header from './components/header/Header';
import '@fontsource/roboto';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          {/* <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route> */}
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
