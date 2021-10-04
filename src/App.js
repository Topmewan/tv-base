import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import SinglePage from "./pages/Singlepage";
import AboutPage from "./pages/Aboutpage";
import HomePage from "./pages/Homepage";

function App() {
  return (
      <Router>
          <Navbar/>
          <div className="container">
              <Switch>
                  <Route exact path='/' component={HomePage}/>
                  <Route exact path='/about' component={AboutPage}/>
                  <Route path='/show/:id' component={SinglePage}/>
              </Switch>
          </div>
      </Router>

  );
}

export default App;
