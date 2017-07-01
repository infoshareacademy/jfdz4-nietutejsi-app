/**
 * Created by agnieszkaw on 14.05.17.
 */
import React from 'react';
import './LoginForm.css';
import firebase from 'firebase'
import SignUpForm from './SignUpForm'
import {
    Col,
    FormGroup,
    FormControl,
    ControlLabel,
    Form,
    Checkbox
} from 'react-bootstrap';

class LoginForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userEmail: '',
            userPass: ''
        }

        this.handleUserEmail = event => {

            this.setState({
                userEmail: event.target.value
            })

        }

        this.handleUserPass = event =>
            this.setState ({
                userPass: event.target.value
            })

    }
handleSubmit = event => {

    firebase.auth().signInWithEmailAndPassword(this.state.userEmail, this.state.userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
        // \\ TODO move to app if authorized
    });
}
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <Col componentClass={ControlLabel}>
                    <p><h3><strong>zaloguj się</strong></h3></p>
                <Form horizontal>

                    {/*komentarz <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={2}>
                            Imię
                        </Col>
                        <Col sm={8}>
                            <FormControl value={this.state.userName} type="email"placeholder="Name onChange={this.handleUserName} />
                        </Col>
                    </FormGroup>
                     FormGroup controlId="formHorizontalSurname">
                        <Col componentClass={ControlLabel} sm={2}>
                            Nazwisko
                        </Col>
                       <Col sm={8}>
                           <FormControl value={this.state.userName} type="email" onChange={this.handleUserName}/>
                        </Col>
                    </FormGroup>koniec komentarza*/}
                    <FormGroup controlId="formHorizontalLogin">
                        <Col componentClass={ControlLabel} sm={4}>
                            Użytkownik
                        </Col>
                        <Col sm={8}>
                            <FormControl
                                value={this.state.userEmail}
                                type="email"
                                placeholder="Login"
                                onChange={this.handleUserEmail}
                            />
                        </Col>
                    </FormGroup>

                    {/*<FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            E-mail
                        </Col>
                        <Col sm={10}>
                            <FormControl
                                value={this.state.userName}
                                type="email"
                                placeholder="Email"
                                onChange={this.handleUserName}
                            />
                        </Col>
                    </FormGroup>*/}

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={4}>
                            Hasło
                        </Col>
                        <Col sm={8}>
                            <FormControl type="Password" placeholder="Password" onChange={this.handleUserPass}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Checkbox>Pamiętaj mnie</Checkbox>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <button type="button" onClick={this.handleSubmit}>Zaloguj się</button>
                        </Col>
                    </FormGroup>
                </Form>
                    </Col>
            </div>

        )
    }
}

export default LoginForm
