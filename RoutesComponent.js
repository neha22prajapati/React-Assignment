import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Products from "./Products/Products";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Product from "./Products/Product";
import Profile from "./Profile/Profile";
import "./RoutesComponent.css";
import CartComponent from "./Cart/CartComponent";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <div className="routes-container">
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="./assets/logo192.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />React Project</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart
            <Badge pill bg="danger">0</Badge>
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/login">Register / Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
      <Routes>
        <Route path="/" Component={Products}></Route>
        <Route path="/profile" Component={Profile}></Route>
        <Route path="/cart" Component={CartComponent}></Route>
        <Route path="/register" Component={Register}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/product" Component={Product}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
