/**
 * Created by rafalpaluch on 11.06.17.
 */
import React from 'react'
import {Form, FormGroup, ControlLabel, FormControl, Button, DropdownButton, MenuItem, Grid} from 'react-bootstrap'
import moment from 'moment';
import DatePicker from 'react-datepicker';
import './NewPerson.css';
import './DatePicker.css';



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
            surnameValue: event.target.value
        })
        this.handleInputChangeEmail = event => this.setState({
            emailValue: event.target.value
        })
    }

    handleNewUserCreation = event => {
        event.preventDefault()
        fetch(' http://localhost:3010/users'
            , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username":"",
                "name":this.state.nameValue,
                "surnameValue": this.state.surnameValue,
                "email": this.state.emailValue,
                "gender": this.state.btnTitle,
                "lastLogin": this.state.startDate
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


    render()
    {

        return (
            <Grid className="main">

                <Form onSubmit={this.handleNewUserCreation}>
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
                    <Form >
                    <FormGroup>



                            <DropdownButton bsSize="large" title={this.state.btnTitle} id="bg-vertical-dropdown-1"
                                            onSelect={this.handleChange}>
                                <MenuItem eventKey="Urodziny">Urodziny</MenuItem>
                                <MenuItem eventKey="Imieniny">Imieniny</MenuItem>
                            </DropdownButton>

                        <DatePicker className="datePicker"
                            selected={this.state.startDate}
                            onChange={this.handleDateChange}
                                    //dodać "Wybierz date okazji"//
                        />
                        <Button bsSize="large" >Wybierz życzenia</Button>
                        <Button bsStyle="success" type="submit" bsSize="large" block>Add person</Button>
                    </FormGroup>
                </Form>

</Form>
                </Grid>
        )

    }
}


