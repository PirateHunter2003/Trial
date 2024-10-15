import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import "./NavBar.css"

function NavExample() {
  return (
    <>
    <Router>
      <div className='header'>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Languages" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/messages">English</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/task">Hindi</NavDropdown.Item>
              </NavDropdown>
              <Button>Sign In</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
     </Router>
     <Card className="bg-dark text-black slide">
      <Card.Img src="freestocks-11SgH7U6TmI-unsplash.JPG" alt="Card image" />
      <Card.ImgOverlay>
        <div><Card.Text>
        Unlimited movies, TV shows and more
Starts at ₹149. Cancel at any time.
        </Card.Text>
        </div>
        <Card.Text>Last updated 3 mins ago</Card.Text>
        <input placeholder='Email Address'></input>
        <Button>Get Started</Button>
      </Card.ImgOverlay>
    </Card>
     </>
  );
}


export default NavExample;

