import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../Home';
import Nav from '../Nav';
import Watches from '../Watches';
import Iphones from '../Iphones/index';
import NotFound from '../NotFound';
import './index.css';

const App = () => (
  <Router>
    <div className="App">
      {/* <script src="../Iphones/FetchIphoneData.js"></script> */}
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route  path="/iphones" component={Iphones} />
      <Route path="/watches" component={Watches} />
    </Switch>
    </div>
  </Router>
);

export default App;
