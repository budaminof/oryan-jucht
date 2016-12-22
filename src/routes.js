import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './components/app';
import Me from './components/me';
import About from './components/about';
import Classes from './components/classes';

export default (
  <Route path="/" component={ App } >
    <IndexRoute component={ Me } />
    <Route path="/about" component={ About } />
    <Route path="/classes" component={ Classes } />
  </Route>
);
