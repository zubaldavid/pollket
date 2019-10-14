import React, { useState } from "react"
import { StyledDiv } from "../styled-native/styled.div"
import { StyledInput } from "../styled-native/styled-input"
import { StyledButton } from "../styled-native/styled-button"
import { StyledHeader } from "../styled-native/styled-header"
import { StyledP } from "../styled-native/styled-p"
import { StyledNavigationHeader } from "../styled-native/styled-nav-header"
import { Logo } from "./icons/logo"
import { useDispatch } from "react-redux"
import { navigate } from "../ui-actions"
import styled from "styled-components"

const PasswordContainer = styled.div`
  height: 6.2rem;
  width: 100%;
  margin-bottom: 2rem;
`
interface IUser {
  email: string
  password: string
}

const initUser = {
  email: "",
  password: ""
}
export const LoginForm = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState<IUser>(initUser)
  const [formValid, setFormValid] = useState<boolean>(false)

  const login = () => {
    dispatch(navigate("/campaign"))
    console.log("Moving")
  }

  return (
    <StyledDiv>
      <StyledNavigationHeader center={<Logo size="60px" />} />
      <StyledHeader>Sign in</StyledHeader>
      <StyledP>Sign in using your PDI credentials </StyledP>
      <StyledInput
        id="email"
        data-cy="email"
        type="Text"
        tabIndex={0}
        title="Email"
        placeholder="Email"
        value={user.email}
        autoComplete="email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUser({ ...user, email: e.target.value })
        }
      />
      <PasswordContainer>
        <StyledInput
          id="password"
          data-cy="password"
          title="Password"
          tabIndex={0}
          value={user.password}
          autoComplete="new-password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser({ ...user, password: e.target.value })
          }
        />
        {formValid && (
          <StyledLabel className="error">{errors.auth.msg}</StyledLabel>
        )}
      </PasswordContainer>
      <StyledButton onClick={login}>Log In</StyledButton>
    </StyledDiv>
  )
}
