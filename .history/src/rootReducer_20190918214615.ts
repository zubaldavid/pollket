import { combineReducers } from "redux"
import { History } from "history"
import { connectRouter } from "connected-react-router"
// import { UIReducer } from './ui-reducer'
// import { onboardingReducer } from '../onboarding/onboarding-reducer'
import { authReducer } from "./contexts/auth/auth-reducer"
import { uiReducer } from "./contexts/ui/ui-reducer"
import { onboardingReducer } from "./contexts/onboarding/onboarding-reducer"
import { termsAndConditionsReducer } from "./contexts/terms-and-conditions/terms-and-conditions-reducer"
import { bankingReducer } from "./contexts/banking/banking-reducer"
// import { pocketsReducer } from '../dashboard/pockets/pockets-reducer'
// import { linkedAccountsReducer } from '../dashboard/linked-accounts/linked-accounts-reducer'

const rootReducer = (browserHistory: History<any>) =>
  combineReducers({
    router: connectRouter(browserHistory),
    onboarding: onboardingReducer,
    auth: authReducer,
    termsAndConditions: termsAndConditionsReducer,
    // cardsState: cardsReducer,
    banking: bankingReducer,
    // linkedAccountsState: linkedAccountsReducer,
    ui: uiReducer
  })

export type AppState = ReturnType<ReturnType<typeof rootReducer>>

export default rootReducer
