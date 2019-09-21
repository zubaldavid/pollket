import { routerMiddleware } from "connected-react-router"
import { createBrowserHistory } from "history"
import { AnyAction, applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { createLogger } from "redux-logger"
import createSentryMiddleware from "redux-sentry-middleware"
import thunk, { ThunkMiddleware } from "redux-thunk"
import createThunkErrorHandlerMiddleware from "redux-thunk-error-handler"
import errorMiddleware, {
  notAuthorizedMiddleware
} from "./middlewares/error-middleware"
import {
  loloadFromLocalStorage,
  saveMiddleware
} from "./middlewares/localstorage-middleware"
import rootReducer, { AppState } from "./root-reducer"

const configureStore = () => {
  const history = createBrowserHistory()
  const composeEnhancers = composeWithDevTools({})

  // TODO:  Add production check
  const logger = createLogger({
    collapsed: true,
    logErrors: false,
    // tslint:disable-next-line: variable-name
    predicate: (_getState, action) => {
      return !(action instanceof Function)
    }
  })
  const myErrorHandler = (err: Error) => {
    Sentry.captureException(err)
  }
  const errorHandlerMiddleware = createThunkErrorHandlerMiddleware({
    onError: myErrorHandler
  })
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
