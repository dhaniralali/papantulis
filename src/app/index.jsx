import React from 'react';
import {render} from 'react-dom';
import { Router, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'



import './../scss/main.scss';

import User from './components/User.jsx';

const App = () => {
    return (
      <BrowserRouter>
        <Route path="/" component={User}>
          
        </Route>
      </BrowserRouter>
    );
}

render(<App/>, document.getElementById('app'));
