import React, {Component} from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    Col,
    Grid,
    Row,
    Button } from 'react-bootstrap'

import {
    BrowserRouter as Router,
    Route } from 'react-router-dom'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import './App.css';
import Osoby from './Osoby'
import Modal from './Modal'

class App extends Component {
    render() {
        return (
            <Router>
<div>
                <Grid>
                    <Row>
                        <Col xs={6} md={4}>
                            <img src={process.env.PUBLIC_URL + '/images/Avatar.png'} alt="Avatar"/>
                            <Button>Edytuj profil</Button>
                            <Button>Dodaj nową osobę</Button>
                        </Col>
                        <Col xs={12} md={8} x>
                        </Col>
                        <Col xs={12} md={8}>
                            <Navbar>
                                <Nav>
                                    <IndexLinkContainer to="/">
                                        <NavItem eventKey={1} href="#">Osoby</NavItem>
                                    </IndexLinkContainer>
                                    <LinkContainer to="/Życzenia">
                                        <NavItem eventKey={2} href="#">Życzenia</NavItem>
                                    </LinkContainer>
                                </Nav>
                            </Navbar>
                        </Col>
                    </Row>
                </Grid>

                <Route exact path="/" component={Osoby}/>
    </div>
            </Router>
        );
    }


}

export default App;
