export const FacebookLogion = () => {
  return (
    <StyledDiv>
      <StyledNavigationHeader center={<Logo />} />
      <StyledHeader>Sign in</StyledHeader>
      <StyledP>Sign in using your PDI credentials </StyledP>
      <StyledInput placeholder="Email" />
      <StyledInput placeholder="Password" />
      <StyledButton onClick={login}>Log In</StyledButton>
    </StyledDiv>
  )
}
