import { Logo, Nav, StyledHeader, Ul, StyledLink, StyledNavLink } from './Header.styled'

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Nav>
        <Logo src='./images/logo.png' alt='' />
        <Ul>
          <StyledLink to="/">Home</StyledLink>
          <StyledNavLink to="/about">About</StyledNavLink>
        </Ul>
      </Nav>
    </StyledHeader>
  )
}