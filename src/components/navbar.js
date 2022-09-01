import { Navbar, Nav, Container } from 'react-bootstrap';

const navbar = () => {

  <>
      <Navbar>
        <Container>
          <Nav>
            <Nav.link href ='/'>Home</Nav.link>
            <Nav.link href ='/officers'> Officers</Nav.link>
          </Nav>
        </Container>
      </Navbar>
  </>
}

export default navbar