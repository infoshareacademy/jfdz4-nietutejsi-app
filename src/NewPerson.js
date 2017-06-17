/**
 * Created by rafalpaluch on 11.06.17.
 */
import React from 'react'
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'
import Panel from './Panel'

export default class NewPerson extends React.Component {

    constructor(props){
        super(props)

        this.state ={
            name:[],
            nameValue:'',
            surname:[],
            surnameValue:'',
            email:[],
            emailValue:''
        }
    }
  render() {
      return (
<div>
    <Form inline>
        <FormGroup controlId="formInlineName">
            <ControlLabel onChange={event =>{
                event.preventDefault()
                this.setState({
                    name:this.state.name.concat(this.state.nameValue)
                })
            }}>Imię</ControlLabel>
            {' '}
            <FormControl type="text" placeholder="Jan" />
        </FormGroup>
        {' '}
        <FormGroup controlId="formInlineEmail">
            <ControlLabel onChange={event =>{
                event.preventDefault()
                this.setState({
                    surname:this.state.surname.concat(this.state.surnameValue)
                })
            }}>Nazwisko</ControlLabel>
            {' '}
            <FormControl type="text" placeholder="Kowalski" />
        </FormGroup>
        {' '}
        <FormGroup controlId="formInlineEmail">
            <ControlLabel onChange={event =>{
                event.preventDefault()
                this.setState({
                    email:this.state.email.concat(this.state.emailValue)
                })
            }}>Email</ControlLabel>
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

