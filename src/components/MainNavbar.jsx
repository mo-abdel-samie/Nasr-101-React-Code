import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import MainNavLink from "./MainNavLink";
import { useCounterContext } from "../contexts/CounterContext";
import { useAuthContext } from "../contexts/AuthContext";

function MainNavbar() {
  const { counter } = useCounterContext();
  const { isAuth, logout } = useAuthContext();

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Student",
      path: "/student",
      protected: true,
    },
    {
      name: "Counter",
      path: "/counter",
      protected: true,
    },
    {
      name: "Shop",
      path: "/products",
    },
    {
      name: "Recipes",
      path: "/recipes",
    },
    {
      name: "Error",
      path: "/404",
    },
  ];

  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll {counter}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {links.map((link, index) =>
              link.protected ? (
                isAuth && <MainNavLink key={index} {...link} />
              ) : (
                <MainNavLink key={index} {...link} />
              )
            )}

            {/* <MainNavLink name="Home" path="/" />
            <MainNavLink name="About" path="/about" />
            <MainNavLink name="Error" path="/404" /> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>

            {isAuth ? (
              <Button
                onClick={logout}
                variant="outline-primary"
                className="ms-2"
              >
                Logout
              </Button>
            ) : (
              <Link to="/login" className="btn btn-primary ms-2">
                Login
              </Link>
            )}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
