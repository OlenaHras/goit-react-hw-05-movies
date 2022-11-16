import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.nav`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid grey;
  box-shadow: 0px 7px 5px -5px rgba(204, 204, 204, 0.75);
`;
export const NavItem = styled(NavLink)`
  border-radius: 10px;
  text-decoration: none;
  color: black;
  font-size: 24px;
  padding: 12px;
  margin: 12px;

  &.active {
    background-color: blue;
    color: white;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: blue;
  }
`;
