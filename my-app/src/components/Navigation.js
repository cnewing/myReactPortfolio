import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = (props) => {
  return (
    <Navbar bg="secondary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="me">
          Christa Newing | Web Developer | Graphic Designer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link href="/">About Me</Nav.Link>
            <Nav.Link href="">Projects</Nav.Link>
            <Nav.Link href="">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
