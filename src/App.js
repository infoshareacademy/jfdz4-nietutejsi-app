import React, { Component } from 'react';
// import {
// BrowserRouter as Router,
// Route
// } from 'react-router-dom'
// import {
// Grid,
//
// }
// from 'react-bootstrap'


//import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import TestView from './TestView'
import firebase from 'firebase'

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
                    <div>
                        <LoginForm/>
                        <SignUpForm/>
                    </div> :
                    <TestView/>
            }
        </div>
    );
  }
}

export default App;
