import { combineReducers } from "redux"
import { History } from "history"
import { connectRouter } from "connected-react-router"
import { onboardingReducer } from "./contexts/onboarding/onboarding-reducer"

const rootReducer = (browserHistory: History<any>) =>
  combineReducers({
    router: connectRouter(browserHistory),
    onboarding: onboardingReducer
  })

export type AppState = ReturnType<ReturnType<typeof rootReducer>>

export default rootReducer
