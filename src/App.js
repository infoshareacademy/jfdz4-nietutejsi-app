import React, { Component } from 'react';
import {Grid, Col} from 'react-bootstrap'
import './App.css';
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import AppView from './AppView'
import firebase from 'firebase'
import UserListView from './UserListView'
import store from './store'
import Provider from 'react-redux'


class App extends Component {

    state = {
        user: null,
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    user: user
                })
            } else {
                this.setState({
                    user: null
                })
            }
        });
    }
    render() {
        return (
            <div>
                {
                    this.state.user === null ?
                        <Grid>
                            <Col xs={12} sm={6}>
                                <LoginForm/>
                            </Col>
                            <Col xs={12} sm={6}>
                                <SignUpForm/>
                            </Col>
                        </Grid>: <AppView/>
                }
            </div>
        );
    }
}

export default App;