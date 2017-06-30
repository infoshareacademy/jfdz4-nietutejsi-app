import React from 'react';
import {
  Nav,
  NavItem,
  Navbar,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';
import {
  BrowserRouter,
  Link
} from 'react-router-dom'
import './App.css';

const logoStyle = {
  maxWidth: '50%',
  left: '50%',
  position: 'relative',
  transform: 'translateX(-25%)'
}

const noDecoration = {
  textDecoration: 'none',
  color: 'black'
}

const profileStyle = {
  marginRight: '100px'
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar>
            <Nav>
              <Link to="/">
              <img style={logoStyle} src={process.env.PUBLIC_URL + '/images/wishbook-logo.png'} alt=""/>
              </Link>
            </Nav>
            <Nav>
              <NavItem>
                <Link style={noDecoration} to="/wishes">Życzenia</Link>
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavDropdown title="Menu">
                <MenuItem><Link style={noDecoration} to="/profile">Mój profil</Link></MenuItem>
                <MenuItem divider/>
                <MenuItem>Wyloguj się</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar>
        </BrowserRouter>
      </div>
    )
  }
}