import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 16px 0;
  height: 50px;
`;

export const Header = styled.nav`
  border-bottom: 1px solid grey;
  box-shadow: 0px 7px 5px -5px rgba(204, 204, 204, 0.75);
`;
export const Link = styled(NavLink)`
  /* border: 1px solid black; */
  border-radius: 10px;
  text-decoration: none;
  color: black;
  font-size: 24px;
  padding: 12px;
  margin: 12px;
`;
