import { Navbar, Nav } from "react-bootstrap";
import SearchBox from "./SearchBox";
const Header = () => {
  return (
    <Navbar variant="dark" expand="lg" bg="dark">
      <Navbar.Brand>Movie Finder</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Populer Movies</Nav.Link>
          <Nav.Link href="#link">Home</Nav.Link>
        </Nav>
        <SearchBox />
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
