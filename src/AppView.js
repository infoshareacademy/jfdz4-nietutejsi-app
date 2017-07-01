import React from 'react';
import {
  Nav,
  NavItem,
  Navbar,
  NavDropdown,
  MenuItem,
  Grid
} from 'react-bootstrap';
import {
  BrowserRouter,
  Link,
  Route
} from 'react-router-dom'
import Wishes from './Wishes'
import StartView from './StartView'
import './App.css';
import firebase from 'firebase'

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
  marginRight: '50px'
}

export default class AppView extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Grid>
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
              <NavDropdown style={profileStyle} title="Menu">
                <MenuItem><Link style={noDecoration} to="/profile">Mój profil</Link></MenuItem>
                <MenuItem divider/>
                <MenuItem onClick={() => firebase.auth().signOut()}>Wyloguj się</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar>

          <Route exact path="/" component={StartView}/>
          <Route path="/wishes" component={Wishes}/>
          <Route path="/profile"/>
          </Grid>
        </BrowserRouter>
      </div>
    )
  }
}