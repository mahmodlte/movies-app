import { Navbar, Nav } from "react-bootstrap";
import Geners from "./Genres";
import SearchBox from "./SearchBox";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <Navbar variant="dark" expand="lg" bg="dark">
      <Navbar.Brand>Movie Finder</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className=" mr-auto">
          <NavLink className="mr-2" exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/populer">
            Popular Movies
          </NavLink>
        </Nav>
        <SearchBox />
        <Geners />
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
