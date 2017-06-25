/**
 * Created by agnieszkaw on 14.05.17.
 */
import React from 'react';
import './LoginForm.css';
import firebase from 'firebase'
import {
    Col,
    FormGroup,
    FormControl,
    ControlLabel,
    Form,
    Checkbox,
    Button
} from 'react-bootstrap';

class LoginForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            userPass: ''
        }

        this.handleUserName = event => {

            this.setState({
                userName: event.target.value
            })

        }

    }
handleSubmit = event => {

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
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
    });

}
    render() {
        return (
            <div>
                <Col componentClass={ControlLabel} sm={6} smOffset={4}>
                    <p><h3><strong>zaloguj się</strong></h3></p>
                <Form horizontal onSubmit={this.handleSubmit}>

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
                        <Col componentClass={ControlLabel} sm={2}>
                            Użytkownik
                        </Col>
                        <Col sm={8}>
                            <FormControl
                                value={this.state.userName}
                                type="email"
                                placeholder="Login"
                                onChange={this.handleUserName}
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
                        <Col componentClass={ControlLabel} sm={2}>
                            Hasło
                        </Col>
                        <Col sm={8}>
                            <FormControl type="Password" placeholder="Password"/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Checkbox>Pamiętaj mnie</Checkbox>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <input type="submit" value="Zaloguj się" />
                            
                        </Col>
                    </FormGroup>
                </Form>
                    </Col>
            </div>

        )
    }
}

export default LoginForm
