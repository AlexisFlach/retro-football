import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom'

export const StyledHeader = styled.header`
  background-color: white;
  padding: 40px 0;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`
export const Logo = styled.img`
  height: 100px;
  max-height: 100px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2em;
  margin-right: 1em;
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2em;
  margin-right: 1em;
`