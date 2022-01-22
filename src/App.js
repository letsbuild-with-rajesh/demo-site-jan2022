import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import AboutMe from './AboutMe';

function setNavLinkActive(event) {
  document.querySelectorAll("nav a").forEach(element => {
    element.classList.remove("active");
  });
  event.target.classList.add("active");
}

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <div className="logo">Logo</div>
          <nav>
            <Link to="/" onClick={setNavLinkActive}>Home</Link>
            <Link to="/" className="disabled-link" onClick={setNavLinkActive}>Products</Link>
            <Link to="/aboutme" onClick={setNavLinkActive}>About Me</Link>
            <Link to="/" className="disabled-link" onClick={setNavLinkActive}>Demos</Link>
            <Link to="/" className="disabled-link" onClick={setNavLinkActive}>Contact Us</Link>
          </nav>
        </header>
        <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
        </Switch>
        </div>
        <hr />
        <footer>
        <div className="logo">Logo</div>
          <div id="footer-icons">
            <i className="fa fa-twitter" />
            <i className="fa fa-facebook-square"/>
            <i className="fa fa-instagram"></i>
          </div>
          <p>Copyright<sup>&copy;</sup>&nbsp;2022 Demo site</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;