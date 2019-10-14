import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Button } from "semantic-ui-react"

const StyledHeader = styled.div`
  width: 100%;
  height: 5rem;
`
const TopHeader = () => {
  return (
    <StyledHeader>
      <LogoutButton />
    </StyledHeader>
  )
}

const LogoutButton = () => {
  return (
    <Link to="/">
      <Button style={{ float: "right" }}> Logout</Button>
    </Link>
  )
}

export default TopHeader
