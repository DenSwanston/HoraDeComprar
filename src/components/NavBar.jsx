import React, { Component } from 'react';
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';
import CartWidget from './CartWidget';
import Marca from '../Assets/Marca.png'

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
      <Navbar className="Barra" expand="lg">
        <Navbar.Brand href="#">
          <img className='Marca' src={Marca}/>
        </Navbar.Brand>
        <Navbar.Toggler target="#navbarSupportedContent" />
        <Collapse navbar id="navbarSupportedContent">
          <Navbar.Nav mr="auto">
            <Nav.Item dropdown>
              <Nav.Link id="Estilos" className="Estilos" dropdownToggle>Nuestros Estilos</Nav.Link>
              <Dropdown.Menu>
                <Dropdown.Item>Puro Metal</Dropdown.Item>
                <Dropdown.Item>Cuero Argento</Dropdown.Item>
                <Dropdown.Item>De Arena</Dropdown.Item>
                <Dropdown.Item>Cucú-Cucú</Dropdown.Item>
              </Dropdown.Menu>
            </Nav.Item>
          </Navbar.Nav> 
          <CartWidget/>
        </Collapse>
      </Navbar>
    )
  }
}