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

interface IUser {
  email: string
  password: string
}

const initUser = {
  email: '',
  password: ''
}
export const LoginForm = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState<IUser>()
  const login = () => {
    dispatch(navigate("/campaign"))
    console.log("Moving")
  }

  return (
    <StyledDiv>
      <StyledNavigationHeader center={<Logo size="60px" />} />
      <StyledHeader>Sign in</StyledHeader>
      <StyledP>Sign in using your PDI credentials </StyledP>
      <<StyledInput
            id='email'
            data-cy='email'
            type='Text'
            tabIndex={0}
            title='Email'
            placeholder='Email'
            value={user.email}
            autoComplete='email'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUser({ ...user, email: e.target.value })
            }
          />
      <StyledInput placeholder="Password" />
      <StyledButton onClick={login}>Log In</StyledButton>
    </StyledDiv>
  )
}
