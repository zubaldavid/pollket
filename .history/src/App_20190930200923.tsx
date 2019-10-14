import React from "react"
import { ConnectedRouter } from "connected-react-router"
import { Switch, Route } from "react-router-dom"
import { LoginForm } from "./components/login"
import { UniverseList } from "./components/universe-list"
import { FacebookLoginComp } from "./components/facebook-login"

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route path="/list" component={UniverseList} />
      <Route path="/facebook" component={FacebookLoginComp} />
    </Switch>
  </ConnectedRouter>
)

export default App
