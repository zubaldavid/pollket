import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  ... // rest of your reducers
})
export default createRootReducer
