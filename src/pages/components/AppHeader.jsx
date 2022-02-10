import { Button, Nav, NavDropdown, Container, Navbar } from "react-bootstrap";
import { Typography } from "@material-ui/core";
import theme from "./Theme";

export default function AppHeader() {
  return (
    <div className="AppHeader">
      <Navbar expand="lg" variant="dark h5">
        <Container>
          <Navbar.Brand href="/" style={{ fontWeight: "bold" }}>
            GENDARY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Container>
              <Nav className="me-auto justify-content-end">
                <Nav.Link href="/">Home</Nav.Link>
                {/* <Nav.Link href="#link">Link</Nav.Link> */}
                <NavDropdown
                  title="Lynn's collections"
                  id="basic-nav-dropdown"
                  bg="dark"
                >
                  <NavDropdown.Item href="/Linktree">
                    Linktree
                    <Typography></Typography>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Anime">
                    AnimeList
                    <Typography></Typography>
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item> */}
                </NavDropdown>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
