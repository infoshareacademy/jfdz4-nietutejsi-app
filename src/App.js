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

const App = () => (
  <div>
    <BrowserRouter>
    <Navbar>
        <Nav pullLeft>
          <img src="http://lorempizza.com/100/50"/>
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
