import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Pages/home';
import Contact from './components/Pages/contact';
import { BrowserRouter as Router, Route } from "react-router-dom";


require('./stylesheets/base.scss');

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </div>
  </Router>,
  document.querySelector('#root')
);

