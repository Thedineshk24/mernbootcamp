import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Link,Switch,BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import User from './user';
import Visit from './visit';
import Notfound from './notfound';
import * as serviceWorker from './serviceWorker';


const routing = (
  <Router>
    <div>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/user">USER</Link></li>
        <li><Link to="/visit">VISIT</Link></li>
      </ul>
    </div>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/user" component={User} />
      <Route path="/visit" component={Visit} />
      <Route component={Notfound} />
    </Switch>
  </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);

