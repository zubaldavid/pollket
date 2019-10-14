import { createStore, applyMiddleware } from "redux"
import { createBrowserHistory } from "history"
import rootReducer from "./rootReducer"
import { routerMiddleware } from "connected-react-router"

const configureStore = () => {
  const history = createBrowserHistory()
  const reducers
  const middleware = routerMiddleware(history)
  const store = createStore(reducers, rootReducer(history))

  return {
    store,
    history
  }
}
export default configureStore
