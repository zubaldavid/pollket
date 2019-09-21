import { combineReducers } from "redux"
import { History } from "history"
import { connectRouter } from "connected-react-router"

import { authReducer } from "./contexts/auth/auth-reducer"
import { uiReducer } from "./contexts/ui/ui-reducer"
import { onboardingReducer } from "./contexts/onboarding/onboarding-reducer"
import { termsAndConditionsReducer } from "./contexts/terms-and-conditions/terms-and-conditions-reducer"
import { bankingReducer } from "./contexts/banking/banking-reducer"

const rootReducer = (browserHistory: History<any>) =>
  combineReducers({
    router: connectRouter(browserHistory),
    onboarding: onboardingReducer
  })

export type AppState = ReturnType<ReturnType<typeof rootReducer>>

export default rootReducer
