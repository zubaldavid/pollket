import React from "react"
import { ConnectedRouter } from "connected-react-router"
import { Switch, Route } from "react-router-dom"
import { LoginForm } from "./components/login"
import { UniverseList } from "./components/universe-list"
import { FacebookLoginComp } from "./components/facebook-login"
import { Provider } from "react-redux"

const App = ({ history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/list" component={UniverseList} />
        <Route exact path="/facebook" component={FacebookLoginComp} />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

export default App
