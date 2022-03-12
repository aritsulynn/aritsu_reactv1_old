import { Button, Nav, NavDropdown, Container, Navbar } from "react-bootstrap";
import { CssBaseline, MuiThemeProvider, Typography } from "@material-ui/core";
import theme from "./Theme";
import { Offcanvas, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

export default function AppHeader() {
  return (
    <div className="AppHeader">
      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <Navbar bg="#22222" expand={false}>
          <Container fluid>
            <Navbar.Brand href="/" style={{color : "white"}}>GENDARY</Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="offcanvasNavbar" style={{backgroundColor: "#4a4a4a"}}/> */}
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              style={{backgroundColor : "#222222"}}
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id="offcanvasNavbarLabel">Gendary's Panel</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{ textDecoration:"None"}}>
                <Nav className="justify-content-end flex-grow-1 pe-3" >
                  <Nav.Link href="/" style={{color:"white"}}>Home</Nav.Link>
                  <Nav.Link href="#" style={{color:"white"}}>Linktree</Nav.Link>
                  <Nav.Link href="#" style={{color:"white"}}>Anilist</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </MuiThemeProvider>
    </div>
  );
}
