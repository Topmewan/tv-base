import './App.css';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
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
                  <Route path='/singleshow/:id' component={SinglePage}/>
              </Switch>
          </div>
      </Router>

  );
}

export default App;
