import { combineReducers } from 'redux'
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './type'

const initialState = 0

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1
    case DECREMENT_COUNTER:
      return state - 1
    default:
      return state
  }
}

const rootReducer = combineReducers({
  counter
})

export default rootReducer
