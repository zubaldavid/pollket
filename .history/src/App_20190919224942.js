import React from "react"
import { ConnectedRouter } from "connected-react-router"
import { Switch, Route } from "react-router-dom"
import { LoginForm } from "./components/Login"
import { Campaign } from "./components/Campaign"
import { StyledDiv } from "./styled-native/styled.div"

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <StyledDiv className="padding">
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/campaign" component={Campaign} />
        <Route path="/facebook" component={Campaign} />
      </Switch>
    </StyledDiv>
  </ConnectedRouter>
)

export default App
