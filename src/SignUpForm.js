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
import TestView from './TestView'

export default class SignUpForm extends React.Component {
    constructor(props) {
        super()

        this.state = {
            user: null,
            email: '',
            password: '',
            repeatPassword: '',
            userResult: ''
        }

        this.handleUserEmail = event => {

            this.setState({
                email: event.target.value
            })

        }

        this.handleUserResult = event => {

            this.setState({
                userResult: event.target.value
            })
        }

        this.handleUserPass = event =>
            this.setState ({
                password: event.target.value
            })

        this.handleUserPassRepeat = event =>
            this.setState ({
                repeatPassword: event.target.value
            })
        this.handleSignUp = () => {
            if (this.state.password === this.state.repeatPassword && this.state.result.toString() === this.state.userResult) {
                firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(
                    data => console.log('data: ', data)
                ).catch(
                    error => console.log('error: ', error)
                )
                this.setState({
                    password: '',
                    repeatPassword: '',
                    email: '',
                    userResult: '',
                })
                this.handleAntiBotCheck()
            } else if (this.state.password !== this.state.repeatPassword) {
                alert('Źle powtórzone hasło');
                this.setState({
                    password: '',
                    repeatPassword: ''
                })
            } else if (this.state.result.toString() !== this.state.userResult) {
                alert('Zły wynik obliczeń')
            }
        }
    }

    componentWillMount() {
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
        this.handleAntiBotCheck = () => {
            this.setState({
                aNumber: Math.ceil(Math.random() * 9),
                bNumber: Math.ceil(Math.random() * 9),
            })
            setTimeout(() => this.setState({
                result: this.state.aNumber + this.state.bNumber
            }), 10)
        }
        this.handleAntiBotCheck()
    }
    render () {
        return (
            <div>
                <Col componentClass={ControlLabel}>
                    <p><h3><strong>Zarejestruj się</strong></h3></p>
                    <Form horizontal>
                        <FormGroup controlId="formHorizontalLogin">
                            <Col componentClass={ControlLabel} sm={4}>
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

                        <FormGroup controlId="formHorizontalPassword">
                            <Col componentClass={ControlLabel} sm={4}>
                                Hasło
                            </Col>
                            <Col sm={8}>
                                <FormControl type="Password" value={this.state.password} placeholder="Password" onChange={this.handleUserPass}/>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword">
                            <Col componentClass={ControlLabel} sm={4}>
                                Powtórz hasło
                            </Col>
                            <Col sm={8}>
                                <FormControl value={this.state.repeatPassword} onChange={this.handleUserPassRepeat} type="Password" placeholder="Repeat password"/>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword">
                            <Col componentClass={ControlLabel} sm={4}>
                                Czy jesteś botem?
                            </Col>
                            <Col sm={8}>
                                <FormControl value={this.state.userResult} onChange={this.handleUserResult} placeholder={this.state.aNumber.toString() + ' + ' + this.state.bNumber.toString()}/>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <button type="button" onClick={this.handleSignUp}>Zarejestruj się</button>
                            </Col>
                        </FormGroup>

                    </Form>
                </Col>
            </div>
        )
    }
}