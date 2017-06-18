import React from 'react';
import {
  Grid,
  Nav,
  NavItem
} from 'react-bootstrap';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import './App.css';

const App = () => (
  <Grid>
    <Nav bsStyle="pills">
      <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
      <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
      <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
    </Nav>
  </Grid>
)

export default App;
