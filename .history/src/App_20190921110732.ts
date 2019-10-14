import React from "react"
import { ConnectedRouter } from "connected-react-router"
import { Switch, Route } from "react-router-dom"
import { LoginForm } from "./components/Login"
import { Campaign } from "./components/Campaign"
import { FacebookLogin } from "./components/facebook-login"

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route path="/campaign" component={Campaign} />
      <Route path="/facebook" component={FacebookLogin} />
    </Switch>
  </ConnectedRouter>
)

export default App
