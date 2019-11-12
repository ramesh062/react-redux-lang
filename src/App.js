import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { renderToStaticMarkup } from 'react-dom/server';
import { withLocalize } from 'react-localize-redux';
import englishTranslation from './translations/en.json';
import danishTranslation from './translations/da.json';
import { Translate } from 'react-localize-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Components/Home';
import Contact from './Components/Contact';
import Service from './Components/Service';
import LoginForm from './Components/LoginForm';
import About from './Components/About';
import LanguageToggle from './Components/LanguageToggle';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.props.initialize({
      languages: [
        { name: 'Hindi', code: 'hd' },
        { name: 'English', code: 'en' }
      ],
      translation: {},
      options: { renderToStaticMarkup }
    });

    this.props.addTranslationForLanguage(englishTranslation, 'en');
    this.props.addTranslationForLanguage(danishTranslation, 'hd');
  }

  render() {
    const baseUrl = "http://localhost";
    return (
      <div>
        <Router>
          <div className="App">
            <nav className="navbar navbar-expand-lg py-3 navbar-light bg-light shadow-sm">
              <div className="container">
                <a href={baseUrl} className="navbar-brand">
                  <img src={logo} width="45" alt="" className="d-inline-block align-middle mr-2" />
                  <span className="text-uppercase font-weight-bold"> <Translate id="title" /></span>
                </a>

                <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>

              </div>
              <div id="navbarSupportedContent" className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/service">Service</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <LanguageToggle />
                </ul>
                
              </div>
            </nav>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={LoginForm} />
            <Route path="/service" component={Service} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </div>
        </Router>

        <footer className="page-footer font-small fixed-bottom bg-light">
          <div className="footer-copyright text-center py-3">© 2019 Copyright:
          <a href="https://mdbootstrap.com/education/bootstrap/"> www.site.com</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default withLocalize(App);
