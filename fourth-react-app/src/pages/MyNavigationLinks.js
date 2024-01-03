import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap';

function MyNavigationLinks() {
  let navigate = useNavigate();

  const logOutAction = () => {
    localStorage.removeItem("loginStatus");
    navigate("/login", { replace: true });
  };

  // Assistance of LocalStorage
  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <></>;
  }

  return (
    <>
      <Navbar class="navbar navbar-expand-lg navbar-light  shadow shadow-1 mb-4"  expand="lg">
        <Container><a className="navbar-brand" style={{fontWeight: 'bold', fontSize: 25, color: 'blue'}} href="index.html"><img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" style={{width: 100}} alt="logo" /></a>
        <div className="collapse navbar-collapse ms-5 me-1 justify-content-center" id="navbarNavDropdown">
          <Navbar.Toggle aria-controls="basic-navbar-nav" ><FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav"/>
            <Nav className="ms-auto">
            
              <Nav.Link as={Link} to={"/home"} className="me-2">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/registration"}>
                Registration
              </Nav.Link>
              <Nav.Link as={Link} to={"/user-list"}>
                User List
              </Nav.Link>
              <Nav.Link as={Link} to={"/todo-list"}>
                About us
              </Nav.Link>
              <Nav.Link as={Link} to={"/nitin-page"}>
                Contact us
              </Nav.Link>

              
              <div className="d-flex p-2 ml-auto">
              <Nav.Link onClick={logOutAction} className="btn btn-outline-success">Log Out</Nav.Link></div>
            </Nav>
           </div>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavigationLinks;
/*<Nav.Link as={Link} to={"/todo"}>
                Todo
              </Nav.Link>
              <Nav.Link as={Link} to={"/todo-list"}>
                Todo List
              </Nav.Link>
              
              <Nav.Link as={Link} to={"/validation-demo"}>
                ValidationDemo
              </Nav.Link>
              <Nav.Link as={Link} to={"/nitin-page"}>
                Nitin Page
              </Nav.Link>*/