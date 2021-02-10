import { Navbar, Nav } from "react-bootstrap";
import Geners from "./Genres";
import SearchBox from "./SearchBox";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Movies-Finder.png";
const Header = () => {
  return (
    <Navbar className="sticky-top" variant="dark" expand="lg" bg="dark">
      <Navbar.Brand>
        <img src={Logo} width="100" height="50" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className=" mr-auto">
          <NavLink className="mr-2" exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/popular">
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
