/**
 * Created by agnieszkaw on 14.05.17.
 */
import React from 'react'
import {
    Col,
    FormGroup,
    FormControl,
    ControlLabel,
    Form,
    Checkbox,
    Button
} from 'react-bootstrap'

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

    render() {
        return (
            <div>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={2}>
                            Name
                        </Col>
                        <Col sm={10}>
                            <FormControl
                                value={this.state.userName}
                                type="email"
                                placeholder="Name"
                                onChange={this.handleUserName}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalSurname">
                        <Col componentClass={ControlLabel} sm={2}>
                            Surname
                        </Col>
                        <Col sm={10}>
                            <FormControl
                                value={this.state.userName}
                                type="email"
                                placeholder="Surname"
                                onChange={this.handleUserName}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalLogin">
                        <Col componentClass={ControlLabel} sm={2}>
                            Login
                        </Col>
                        <Col sm={10}>
                            <FormControl
                                value={this.state.userName}
                                type="email"
                                placeholder="Login"
                                onChange={this.handleUserName}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl
                                value={this.state.userName}
                                type="email"
                                placeholder="Email"
                                onChange={this.handleUserName}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Hasło
                        </Col>
                        <Col sm={10}>
                            <FormControl type="Haslo" placeholder="Haslo"/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Checkbox>Pamiętaj mnie</Checkbox>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit">
                                Zaloguj
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>

        )
    }
}

export default LoginForm