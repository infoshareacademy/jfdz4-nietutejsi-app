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
    render() {
        return (
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={10}>
                        <FormControl type="email" placeholder="Email" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Hasło
                    </Col>
                    <Col sm={10}>
                        <FormControl type="Haslo" placeholder="Haslo" />
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

        )
    }
}


export default LoginForm
