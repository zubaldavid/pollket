import { combineReducers } from "redux"
import { History } from "history"
import { connectRouter } from "connected-react-router"

const rootReducer = (browserHistory: History<any>) =>
  combineReducers({
    router: connectRouter(browserHistory)
  })

export type AppState = ReturnType<ReturnType<typeof rootReducer>>

export default rootReducer
