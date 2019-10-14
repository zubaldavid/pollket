import { createStore, applyMiddleware, combineReducers } from "redux"
import { createBrowserHistory } from "history"
import rootReducer from "./rootReducer"
import { routerMiddleware } from "connected-react-router"
import thunk from "redux-thunk"
const configureStore = () => {
  const history = createBrowserHistory()
  const middleware = routerMiddleware(history)
  const reducers = combineReducers({ register: registerReducer })
  const store = createStore(reducers, applyMiddleware(middleware, thunk))

  return {
    store,
    history
  }
}
export default configureStore
