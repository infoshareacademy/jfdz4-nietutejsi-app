import React from 'react';
import {
  Nav,
  NavItem,
  Navbar
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

const App = () => (
  <div>
    <BrowserRouter>
    <Navbar>
        <Nav>
          <img style={logoStyle} src={process.env.PUBLIC_URL + '/images/wishbook-logo.png'} alt=""/>
        </Nav>
        <Nav>
            <NavItem>
              <Link to="/wishes">Życzenia</Link>
            </NavItem>
        </Nav>
        <Nav pullRight>
            <NavItem>
              <Link to ="/profile">Mój profil</Link>
            </NavItem>
        </Nav>
    </Navbar>
      </BrowserRouter>
    </div>
)

export default App;
