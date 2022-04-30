import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Auth/firebase/firebase.init";
import { FaUser } from 'react-icons/fa';


const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleLogout =  () =>{
    signOut(auth)
  }
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">NH Electronics</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link  as={Link} to="/home">Home</Nav.Link>
              
             
              {user ? <Nav.Link className="fw-bold " onClick={handleLogout}>LogOut</Nav.Link> :<Nav.Link className="fw-bold " as={Link} to="/login ">Login</Nav.Link>}
            { user && <Nav.Link className="fw-bold " as={Link} to=""><FaUser/>{user?.email}</Nav.Link>}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
