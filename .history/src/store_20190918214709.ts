import { createStore } from "redux"
import { createBrowserHistory } from "history"
import rootReducer from "./rootReducer"

const configureStore = () => {
  const history = createBrowserHistory()

  const store = createStore(
    rootReducer(history),
    { ...loloadFromLocalStorage() },
    composeEnhancers(
      applyMiddleware(
        errorHandlerMiddleware,
        saveMiddleware,
        logger,
        routerMiddleware(history),
        createSentryMiddleware(Sentry, {
          // Optionally pass some options here.
          filterBreadcrumbActions: action => !(action instanceof Function),
          actionTransformer: action => {
            return {
              type: action.type
            }
          }
        }),
        errorMiddleware,
        notAuthorizedMiddleware,
        thunk as ThunkMiddleware<AppState, AnyAction>
      )
    )
  )

  return {
    store,
    history
  }
}
export default configureStore
