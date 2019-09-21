export const FacebookLogion = () => {
  return (
    <StyledDiv>
      <StyledNavigationHeader center={<Logo />} />
      <StyledHeader>Facebook Login</StyledHeader>
      <StyledP>
        Log into Facebook so we can subscribe the demographic to your account{" "}
      </StyledP>
      <StyledInput placeholder="Email" />
      <StyledInput placeholder="Password" />
      <StyledButton onClick={login}>Log In</StyledButton>
    </StyledDiv>
  )
}
