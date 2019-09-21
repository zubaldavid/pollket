import React from "react"
import { Route } from "react-router-dom"
import { LoginForm } from "./components/Login"
import { Campaign } from "./components/Campaign"
import { StyledDiv } from "./styled-native/styled.div"
import { Switch } from "react-native"

const App = () => (
  <ConnectedRouter history={history}>
    <StyledDiv className="padding">
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/campaign" component={Campaign} />
      </Switch>
    </StyledDiv>
  </ConnectedRouter>
)

export default App
