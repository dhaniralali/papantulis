import React from 'react';
import {render} from 'react-dom';
// import { Router, Route, IndexRoute } from 'react-router'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import axios from 'axios'


import './../scss/main.scss';
import rootReducers from './reducers/rootReducer'
import axiosConfig from './axiosConfig.jsx';


//components
import Main from './components/Main.jsx';
import User from './components/User.jsx';
import PlacesList from './components/PlacesList.jsx';
import PlaceDetail from './components/PlaceDetail.jsx';

//Configure Store
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("state", serializedState);
};

const store = createStore(rootReducers,loadState(),applyMiddleware(thunk,logger))

store.subscribe(()=> {
  saveState(store.getState())
})

const App = () => {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={PlacesList}>
            </Route>
            <Route path="/:placeUrl" component={PlaceDetail}>
            </Route>
            <Route path="/admin" component={Main}>
            </Route>
      
        </Switch>
      </BrowserRouter>
    );
}

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));
