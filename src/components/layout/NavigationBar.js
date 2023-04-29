import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/LinkContainer";

const NavigationBar = (props) => {
  const isLoggedIn = props.isLoggedIn;

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Moonlight</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/profile">
                <Nav.Link>Profile</Nav.Link>
              </LinkContainer>
              <NavDropdown
                title="Wellbeing programmes"
                id="collasible-nav-dropdown"
              >
                <LinkContainer to="/profile/current-enrolment">
                  <NavDropdown.Item>Current enrolment</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/wellbeing/programmes">
                  <NavDropdown.Item>All programmes</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/wellbeing/survey/choose">
                <Nav.Link>Submit wellbeing survey</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className="me-auto">
              {isLoggedIn ? (
                <LinkContainer to="/logout">
                  <Nav.Link>Logout</Nav.Link>
                </LinkContainer>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>Register</Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
