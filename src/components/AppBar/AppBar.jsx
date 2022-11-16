import { NavItem, Header } from '../AppBar/AppBar.styled';
export const AppBar = () => {
  return (
    <Header>
      <NavItem to="/" end>
        <b>Home</b>
      </NavItem>
      <NavItem to="/movies">
        <b>Movies</b>
      </NavItem>
    </Header>
  );
};
