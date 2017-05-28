import React, {Component} from 'react';
import {
    Router,
    Navbar,
    Nav,
    NavItem,
    Col,
    Grid,
    Row,
    Button
} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import './App.css';
import Osoby from './Osoby'

class App extends Component {
    render() {
        return (
<Router>

                    <Grid>
                        <Row>
                            <Col xs={6} md={4}>
                                <img src={process.env.PUBLIC_URL + '/images/Avatar.png'} alt="Avatar"/>
                                <Button>Edytuj profil</Button>
                            </Col>
                            <Col xs={12} md={8} x>

                            </Col>
                            <Col xs={12} md={8}>
                                <Navbar>
                                    <Nav>
                                        <IndexLinkContainer to="/">
                                        <NavItem eventKey={1} href="#">Osoby</NavItem>
                                        <NavItem eventKey={2} href="#">Życzenia</NavItem>
                                    </Nav>
                                </Navbar>
                            </Col></Row>
                    </Grid>

                <Routh exact path="/" component={Osoby}/>
    </Router>
                );
                }



    }

    export
    default
    App;
