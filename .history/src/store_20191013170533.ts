import { createStore, applyMiddleware, combineReducers } from "redux"
import { createBrowserHistory } from "history"
import registerReducer from "./reducers/register-reducer"
import { routerMiddleware } from "connected-react-router"
import thunk from "redux-thunk"
import rootReducer from "./rootReducer"
const configureStore = () => {
  const history = createBrowserHistory()
  const middleware = routerMiddleware(history)
  const store = createStore(rootReducer, applyMiddleware(middleware, thunk))

  return {
    store,
    history
  }
}
export default configureStore
