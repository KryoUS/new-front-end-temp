import './App.css';
import Header from './components/header/Header';
import News from './components/news/News';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import '@fontsource/roboto';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route component={News} exact path="/" />
          <Route component={About} path="/about" />
        </Switch>
      </Router>
      <Footer />      
    </div>
  );
}

export default App;
