import { createStore, applyMiddleware } from "redux"
import { createBrowserHistory } from "history"
import rootReducer from "./rootReducer"

const configureStore = () => {
  const history = createBrowserHistory()
  const store = createStore(rootReducer(history))

  return {
    store,
    history
  }
}
export default configureStore
