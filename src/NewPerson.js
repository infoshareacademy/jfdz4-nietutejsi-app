/**
 * Created by rafalpaluch on 11.06.17.
 */
import React from 'react'
import {Form, FormGroup, ControlLabel, FormControl, Button, DropdownButton, MenuItem} from 'react-bootstrap'
import Picker from './DataPicker'
import moment from 'moment';

export default class NewPerson extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            btnTitle:'Wybierz okazje',
            add: null,
            nameValue: '',

            surnameValue: '',
            startDate: moment(),
            emailValue: ''
        }

        this.handleInputChangeName = event => this.setState({
            nameValue: event.target.value
        })
        this.handleInputChangeSurname = event => this.setState({
            nameValue: event.target.value
        })
        this.handleInputChangeEmail = event => this.setState({
            nameValue: event.target.value
        })
    }

    handleNewUserCreation = event => {
        event.preventDefault()
        fetch('http://localhost:3010/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": "jckspr87",
                "name": "Jack",
                "surname": "Sparrow",
                "email": "jack.sparrow@test.com",
                "gender": "Male",
                "lastLogin": "09-05-2017"
            })
        })
    }

    handleChange =(evt) => {
        this.setState({btnTitle: evt})
    }

    handleDateChange = (date) => {
        this.setState({
            startDate: date
        });
    }


    render() {
        console.log(this.state)
        return (
            <div>
                <Form inline onSubmit={this.handleNewUserCreation}>
                    <FormGroup controlId="formInlineName">
                        <ControlLabel>Imię</ControlLabel>
                        {' '}
                        <FormControl type="text" placeholder="Jan" onChange={this.handleInputChangeName}/>
                    </FormGroup>
                    {' '}
                    <FormGroup controlId="formInlineEmail">
                        <ControlLabel>Nazwisko</ControlLabel>
                        {' '}
                        <FormControl type="text" placeholder="Kowalski" onChange={this.handleInputChangeSurname}/>
                    </FormGroup>
                    {' '}
                    <FormGroup controlId="formInlineEmail">
                        <ControlLabel>Email</ControlLabel>
                        {' '}
                        <FormControl type="email" placeholder="jan.kowalski@example.com" onChange={this.handleInputChangeEmail}/>
                    </FormGroup>
                    {' '}

                    <FormGroup>
                        <div>
                            <DropdownButton title={this.state.btnTitle} id="bg-vertical-dropdown-1"
                                            onSelect={this.handleChange}>
                                <MenuItem eventKey="Urodziny">Urodziny</MenuItem>
                                <MenuItem eventKey="Imieniny">Imieniny</MenuItem>
                            </DropdownButton>
                        </div>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleDateChange}
                        />
                        {/*<Button >Wybierz życzenia</Button>*/}
                        <Button bsStyle="success" type="submit">+</Button>
                    </FormGroup>
                </Form>
            </div>
        )

    }
}

