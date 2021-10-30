import './App.css';
import Header from './components/header/Header';
import News from './components/news/News';
import Footer from './components/footer/Footer';
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
          <Route path="/">
            <News />
          </Route>
          {/* 
          <Route path="/about">
            <About />
          </Route> */}
        </Switch>
      </Router>
      <Footer />      
    </div>
  );
}

export default App;
