import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.sass';

import store from './store/createStore'

import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const history = syncHistoryWithStore(browserHistory, store)
const PlaceHolder = () => (
  <h1>Text</h1>
)

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PlaceHolder}/>
        <Route path="/agenda" component={PlaceHolder}/>
        <Route path="/cursussen" component={PlaceHolder}>
          <Route path="/cursussen/1" component={PlaceHolder}/>
          <Route path="/cursussen/2" component={PlaceHolder}/>
          <Route path="/cursussen/3" component={PlaceHolder}/>
        </Route>
        <Route path="/seminars" component={PlaceHolder}>
        </Route>
        <Route path="/fort-challenge" component={PlaceHolder}/>
        <Route path="/locatie-verhuur" component={PlaceHolder}/>
        <Route path="/offerte-aanvraag" component={PlaceHolder}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
