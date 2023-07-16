import React, { Component } from 'react';
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <>
    <Navbar/>
    </>
  )
}

export default class App extends Component {
  render() {
    return (
      <Navbar expand="lg" light bg="light">
        <Navbar.Brand href="#">
          Hora de Comprar
        </Navbar.Brand>
        <Navbar.Toggler target="#navbarSupportedContent" />
        <Collapse navbar id="navbarSupportedContent">
          <Navbar.Nav mr="auto">
            <Nav.Item dropdown>
              <Nav.Link dropdownToggle>Estilos</Nav.Link>
              <Dropdown.Menu>
                <Dropdown.Item>Malla Metálica</Dropdown.Item>
                <Dropdown.Item>Malla de Cuero</Dropdown.Item>
              </Dropdown.Menu>
            </Nav.Item>
          </Navbar.Nav>
          <CartWidget/>
        </Collapse>
      </Navbar>
    )
  }
}