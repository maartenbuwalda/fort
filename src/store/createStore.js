import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import reducers from '../reducers'

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

export default store
