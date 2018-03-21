import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './Counter/duck/reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'remote-redux-devtools'

// const composeEnhancers =
//   (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__()) ||
//   compose

export default createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  composeWithDevTools(applyMiddleware(thunk))
)
