import React from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <Navbar color="dark" dark expand="lg">
        <Container>
          <NavbarBrand className='h1 mb-0' href='/' as="/"><i className="fab fa-mailchimp mr-1"/>FRETES BRASIL</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/fretes">Fretes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#sobre">Sobre</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#contato">Contato</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled href="/login">Login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </Container>
        </Navbar>
    );
  }
}