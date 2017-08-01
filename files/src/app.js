import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './pages/App';
import Home from './pages/Home';
import Elementos from './pages/Elementos';
import Sobre from './pages/Sobre';

import Elemento from './components/Elemento';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="elementos" component={Elementos}>
        	<Route path=":id" component={Elemento} />
        </Route>
        <Route path="sobre" component={Sobre} />
    </Route>
  </Router>
),
  document.getElementById("app")
);
