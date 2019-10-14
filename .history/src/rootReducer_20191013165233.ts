import { combineReducers } from "redux"
import { History } from "history"
import { connectRouter } from "connected-react-router"
import registerReducer from "./reducers/register-reducer"

const rootReducer = (browserHistory: History<any>) =>
  combineReducers({
    register: registerReducer,
    router: connectRouter(browserHistory)
  })

export type AppState = ReturnType<ReturnType<typeof rootReducer>>

export default rootReducer
