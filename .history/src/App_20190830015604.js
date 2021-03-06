import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { LoginForm } from "./components/Login"
import { Campaign } from "./components/Campaign"
import { StyledDiv } from "./styled-native/styled.div"

const App = () => (
  <BrowserRouter>
    <StyledDiv className="padding">
      <Route exact path="/" component={LoginForm} />
      <Route path="/campaign" component={Campaign} />
    </StyledDiv>
  </BrowserRouter>
)

export default App
