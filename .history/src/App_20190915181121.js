import React from "react"
import { Switch, Route } from "react-router-dom"
import { LoginForm } from "./components/Login"
import { Campaign } from "./components/Campaign"
import { StyledDiv } from "./styled-native/styled.div"

const App = () => (
  // <ConnectedRouter history={history}>
  <StyledDiv className="padding">
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route path="/campaign" component={Campaign} />
    </Switch>
  </StyledDiv>
  // </ConnectedRouter>
)

export default App
