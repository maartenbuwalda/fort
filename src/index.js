import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.sass';

import store from './store/createStore'

import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import HomeContainer from './containers/HomeContainer';
import LocatieVerhuurContainer from './containers/LocatieVerhuurContainer';
import MGVContainer from './containers/MGVContainer'
import OMAContainer from './containers/OMAContainer';
import PraktischLeiderschapContainer from './containers/PraktischLeiderschapContainer';
import TeambuildingContainer from './containers/TeambuildingContainer';

const history = syncHistoryWithStore(browserHistory, store)
const PlaceHolder = () => (
  <div className="wrapper">
    <h1>Onder constructie</h1>
  </div>
)

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeContainer}/>
        <Route path="/agenda" component={PlaceHolder}/>
        <Route path="/cursussen">
          <IndexRedirect to="/cursussen/teambuilding"/>
          <Route path="/cursussen/teambuilding" component={TeambuildingContainer}/>
          <Route path="/cursussen/praktisch-leiderschap" component={PraktischLeiderschapContainer}/>
          <Route path="/cursussen/motiverende-gespreksvoering" component={MGVContainer}/>
          <Route path="/cursussen/omgaan-met-agressie" component={OMAContainer}/>
        </Route>
        <Route path="/seminars" component={PlaceHolder}>
        </Route>
        <Route path="/fort-challenge" component={PlaceHolder}/>
        <Route path="/locatie-verhuur" component={LocatieVerhuurContainer}/>
        <Route path="/offerte-aanvraag" component={PlaceHolder}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
