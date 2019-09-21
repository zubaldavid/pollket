import { createStore } from "redux"
import { createBrowserHistory } from "history"
import rootReducer from "./rootReducer"

const configureStore = () => {
  const history = createBrowserHistory()
  const composeEnhancers = composeWithDevTools({})
  const store = createStore(
    rootReducer(history),
    composeEnhancers(
      applyMiddleware(errorHandlerMiddleware, saveMiddleware, logger)
    )
  )

  return {
    store,
    history
  }
}
export default configureStore
