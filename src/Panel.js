import React from 'react'
import {Button, Form, DropdownButton, MenuItem} from 'react-bootstrap'
import 'react-datepicker/dist/react-datepicker.css'
import Picker from './DataPicker'
import Modal from "./Modal";

class Panel extends React.Component{

    render(){
        return (
            <div>
                <Form inline>
                    <DropdownButton title="Wybierz okazje" id="bg-vertical-dropdown-1">
                        <MenuItem eventKey="1">Urodziny</MenuItem>
                        <MenuItem eventKey="2">Imieniny</MenuItem>
                    </DropdownButton>
                    <Picker/>
                    <Button>Wybierz urodziny</Button>


                </Form>

            </div>
        )
    }
}
export default Panel