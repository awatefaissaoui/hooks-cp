import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


function New() {
  return (

          <Nav className="me-auto">
            <Nav.Link href="/">Movies</Nav.Link>
            <Nav.Link href="/new">Add movie</Nav.Link>
     
          </Nav>
    
  );
}

export default New;