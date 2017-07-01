import React from 'react';
import './LoginForm.css';
import firebase from 'firebase'
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
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        document.getElementById('quickstart-sign-in').disabled = false;

    });
}
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <Col componentClass={ControlLabel}>
                    <p><h3><strong>zaloguj się</strong></h3></p>
                <Form horizontal>
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
