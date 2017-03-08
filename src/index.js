import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.sass';

import store from './store/createStore'

import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Home from './components/pages/Home'
import LocatieVerhuur from './components/pages/LocatieVerhuur'
import MGV from './components/pages/MGV'
import OMA from './components/pages/OMA'
import OfferteAanvraag from './components/pages/OfferteAanvraag'
import PraktischLeiderschap from './components/pages/PraktischLeiderschap'
import Teambuilding from './components/pages/Teambuilding'

const history = syncHistoryWithStore(browserHistory, store)
const PlaceHolder = () => (
  <div className="wrapper">
    <h1>Onder constructie</h1>
  </div>
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/agenda" component={PlaceHolder}/>
        <Route path="/cursussen">
          <IndexRedirect to="/cursussen/teambuilding"/>
          <Route path="/cursussen/teambuilding" component={Teambuilding}/>
          <Route path="/cursussen/praktisch-leiderschap" component={PraktischLeiderschap}/>
          <Route path="/cursussen/motiverende-gespreksvoering" component={MGV}/>
          <Route path="/cursussen/omgaan-met-agressie" component={OMA}/>
        </Route>
        <Route path="/seminars" component={PlaceHolder}>
        </Route>
        <Route path="/fort-challenge" component={PlaceHolder}/>
        <Route path="/locatie-verhuur" component={LocatieVerhuur}/>
        <Route path="/offerte-aanvraag" component={OfferteAanvraag}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
