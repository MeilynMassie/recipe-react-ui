
import BootstrapNavbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router'
import chefLogo from '../../assets/images/chefLogo.jpeg'

function Navbar() {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BootstrapNavbar.Brand href="/">
          <img
            src={chefLogo}
            alt="Chef logo"
            width="75"
            height="75"
          />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="main-navbar" />
        <BootstrapNavbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/recipes">View Recipes</Nav.Link>
            <Nav.Link as={NavLink} to="/recipes/new">Create New Recipe</Nav.Link>
            <Nav.Link as={NavLink} to="/friends">Visit a Friend's Kitchen</Nav.Link>
            <Nav.Link as={NavLink} to="/flipper">Speak With Flipper</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar
