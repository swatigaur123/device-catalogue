import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../Home/home';
import Watches from '../Watches/watch';
import Iphones from '../Iphones/iphone';
import NotFound from '../NotFound';
import Navs from '../Nav/Navbar';

const App = () => (
  <Router>
    <div className="App">
    <Navs />
    <Switch>
      <Route exact path="/" component={Home} >
        <Home/>
        </Route>
      <Route  path="/iphones" component={Iphones} />
      <Route path="/watches" component={Watches} />
    </Switch>
    </div>
  </Router>
);

export default App;
