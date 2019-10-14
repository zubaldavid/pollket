import { createStore, applyMiddleware } from "redux"
import { createBrowserHistory } from "history"
import rootReducer from "./rootReducer"
import { routerMiddleware } from "connected-react-router"

const configureStore = () => {
  const history = createBrowserHistory()
  const middleware = routerMiddleware(history)
  const reducers
  const store = createStore(reducers, applyMiddleware(middleware, thunk))

  return {
    store,
    history
  }
}
export default configureStore
