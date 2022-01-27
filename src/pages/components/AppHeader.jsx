import { Button, Nav, NavDropdown, Container, Navbar } from "react-bootstrap";
// import { Typography } from "@material-ui/core";

export default function AppHeader() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">Gendary</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Container>
              <Nav className="justify-content-end">
                {/* <Nav.Link href="/">Home</Nav.Link> */}
                <NavDropdown title="Lynn's collection" id="basic-nav-dropdown">
                  {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> */}
                  <NavDropdown.Item href="#action/3.3">
                    <Nav.Link href="/Linktree" style={{ color: "black" }}>
                      Linktree
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <Nav.Link href="/discord" style={{ color: "black" }}>
                      Discord
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <Nav.Link href="/Anime" style={{ color: "black" }}>
                      Anime
                    </Nav.Link>
                  </NavDropdown.Item>
                  {/* <NavDropdown.Divider />
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
