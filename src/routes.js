import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './components/app';
import About from './containers/about';
import Puna from './containers/puna';
import Classes from './containers/classes';
import Contact from './containers/contact';

export default (
  <Route path="/" component={ App } >
    <IndexRoute component={ About } />
    <Route path="/about" component={ About } />
    <Route path="/puna" component={ Puna } />
    <Route path="/classes" component={ Classes } />
    <Route path="/contact" component={ Contact } />
  </Route>
);
