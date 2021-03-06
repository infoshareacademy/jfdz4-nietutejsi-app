import React, {Component} from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    Col,
    Grid,
    Row,
} from 'react-bootstrap'

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'
import './App.css';
import Osoby from './Osoby'
import NewPerson from './NewPerson'


class Profile extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Grid>
                        <Row>
                            <Col xs={6} md={4}>
                                <img src={process.env.PUBLIC_URL + '/images/Avatar.png'} alt="Avatar"/>

                            </Col>
                            <Col xs={12} md={8} x>
                            </Col>
                            <Col xs={12} md={8}>
                                <Navbar>
                                    <Nav>
                                        <IndexLinkContainer to="/">
                                            <NavItem eventKey={1} href="#">Osoby</NavItem>
                                        </IndexLinkContainer>
                                        <LinkContainer to="/NowaOsoba">

                                            <NavItem eventKey={2} href="#">Dodaj nową osobę</NavItem>
                                        </LinkContainer>
                                        {/*<LinkContainer to="/Życzenia">*/}
                                            {/*<NavItem eventKey={2} href="#">Życzenia</NavItem>*/}
                                        {/*</LinkContainer>*/}
                                    </Nav>
                                </Navbar>
                            </Col>
                        </Row>
                    </Grid>

                    <Route exact path="/" component={Osoby}/>
                    <Route path="/NowaOsoba" component={NewPerson}/>
                </div>
            </Router>
        );
    }
}

export default Profile;
