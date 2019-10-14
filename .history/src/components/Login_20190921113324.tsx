import React, { useState, useEffect } from "react"
import { StyledDiv } from "../styled-native/styled.div"
import { StyledInput } from "../styled-native/styled-input"
import { StyledButton } from "../styled-native/styled-button"
import { StyledHeader } from "../styled-native/styled-header"
import { StyledP } from "../styled-native/styled-p"
import { StyledNavigationHeader } from "../styled-native/styled-nav-header"
import { Logo } from "./icons/logo"
import { useDispatch } from "react-redux"
import { navigate } from "../ui-actions"
import { StyledLabel } from "../styled-native/styled-label"

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

  useEffect(() => {
    setFormValid(user.email.length > 5 && user.password.length > 5)
  })
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
      <StyledInput
        id="password"
        data-cy="password"
        title="Password"
        type="password"
        placeholder="Password"
        tabIndex={0}
        value={user.password}
        autoComplete="new-password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUser({ ...user, password: e.target.value })
        }
      />
      {formValid && (
        <StyledLabel className="error">
          'The email or password entered is not correct. Pleae try again.
        </StyledLabel>
      )}
      <StyledButton disabled={!formValid} onClick={login}>
        Log In
      </StyledButton>
    </StyledDiv>
  )
}
