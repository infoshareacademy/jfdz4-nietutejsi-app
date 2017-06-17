/**
 * Created by rafalpaluch on 11.06.17.
 */
import React from 'react'
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'
import Panel from './Panel'

export default class NewPerson extends React.Component {
  render() {
      return (
<div>
    <Form inline>
        <FormGroup controlId="formInlineName">
            <ControlLabel>Imię</ControlLabel>
            {' '}
            <FormControl type="text" placeholder="Jan" />
        </FormGroup>
        {' '}
        <FormGroup controlId="formInlineEmail">
            <ControlLabel>Nazwisko</ControlLabel>
            {' '}
            <FormControl type="text" placeholder="Kowalski" />
        </FormGroup>
        {' '}
        <FormGroup controlId="formInlineEmail">
            <ControlLabel>Email</ControlLabel>
            {' '}
            <FormControl type="email" placeholder="jan.kowalski@example.com" />
        </FormGroup>
        {' '}

    </Form>
    <Panel/>
</div>
)

}
}

