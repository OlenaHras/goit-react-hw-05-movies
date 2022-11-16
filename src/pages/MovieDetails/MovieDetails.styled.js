import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const DetailsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;
export const Main = styled.main`
  padding: 24px;
`;

export const BackLink = styled(NavLink)`
  display: inline-block;
  width: 62px;
  height: 16px;
  border: 0;
  border-radius: 10px;
  background-size: 40%;
  background-color: blue;
  color: white;
  text-decoration: none;
  background-repeat: no-repeat;
  background-position: center;
  padding: 8px 10px;
  margin-bottom: 24px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
export const Wrapper = styled.div`
  margin: 0 24px;
`;
