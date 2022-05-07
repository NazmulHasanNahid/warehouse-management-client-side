import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Auth/firebase/firebase.init";
import { FaUser } from 'react-icons/fa';
import logo from  '../../../../img/logo.png'


const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleLogout =  () =>{
    signOut(auth)
  }
  return (
    <div >
      <Navbar bg="light"  expand="lg">
        <Container>
          <Navbar.Brand href="#home"> <img width="40px" src={logo} alt="" /> <span className="fw-bold text-secondary">Electronics</span> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link  as={Link} to="/home">Home</Nav.Link>
              <Nav.Link  as={Link} to="/blog">Blog</Nav.Link>
             {user &&  <Nav.Link  as={Link} to="/manageItem">Manage Items</Nav.Link>}
             {user &&  <Nav.Link  as={Link} to="/AddItem">Add Item</Nav.Link>}
             {user && <Nav.Link  as={Link} to="/myItem">My Item</Nav.Link>}

             
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
