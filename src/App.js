import React from 'react';
import './App.css';
import Home from './Components/Home';
import Shop from './Components/Shop'
import About from './Components/About'
import Contact from './Components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='shop' component={Shop} />
          <Route path='about' component={About} />
          <Route path='contact' component={Contact} />
        </Switch>
      </Router >
    </div >
  );
}

export default App;
