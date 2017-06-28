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

export default class SignUpForm extends React.Component {
    constructor(props) {
        super()

        this.state = {
            email: '',
            password: ''
        }

        this.handleUserEmail = event => {

            this.setState({
                email: event.target.value
            })

        }

        this.handleUserPass = event =>
            this.setState ({
                password: event.target.value
            })


        this.handleSignUp = () => {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(
                data => console.log('data: ', data)
            ).catch(
                error => console.log('error: ', error)
            )
        }
    }
    render () {
        return (
            <div>
                <Col componentClass={ControlLabel} sm={6} smOffset={4}>
                    <p><h3><strong>Zarejestruj się</strong></h3></p>
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
                            <Col componentClass={ControlLabel} sm={2}>
                                E-mail
                            </Col>
                            <Col sm={8}>
                                <FormControl
                                    type="email"
                                    placeholder="E-mail"
                                    onChange={this.handleUserEmail}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalLogin">
                            <Col componentClass={ControlLabel} sm={2}>
                                Nazwa użytkownika
                            </Col>
                            <Col sm={8}>
                                <FormControl
                                    type="email"
                                    placeholder="Username"
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
                                <FormControl type="Password" placeholder="Password" onChange={this.handleUserPass}/>
                            </Col>
                        </FormGroup>

                        {/*\\ TODO check if both password inputs match*/}
                        <FormGroup controlId="formHorizontalPassword">
                            <Col componentClass={ControlLabel} sm={2}>
                                Powtórz hasło
                            </Col>
                            <Col sm={8}>
                                <FormControl type="Password" placeholder="Repeat password"/>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <button type="button" onClick={this.handleSignUp}>Zarejestruj się</button>
                            </Col>
                        </FormGroup>

                        {/*\\ TODO reCaptcha (package installed)*/}
                    </Form>
                </Col>
            </div>
        )
    }
}