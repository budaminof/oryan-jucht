import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './components/app';
import Me from './components/me';
import About from './containers/about';
import Puna from './containers/puna';
import Classes from './containers/classes';

export default (
  <Route path="/" component={ App } >
    <IndexRoute component={ Me } />
    <Route path="/about" component={ About } />
    <Route path="/puna" component={ Puna } />
    <Route path="/classes" component={ Classes } />
  </Route>
);
