import React from 'react'
import {Button, Form} from 'react-bootstrap'
import 'react-datepicker/dist/react-datepicker.css'
import Picker from './DataPicker'

import DropButton from "./DropdownButton";

class Panel extends React.Component{

state ={
    add: null
}



    render(){
        return (
            <div>
                <Form inline>
                        <DropButton />
                    <Picker/>
                    <Button >Wybierz życzenia</Button>
                    <Button bsStyle="success" onClick={event=> {
                        event.preventDefault()
                        this.setState({add:"newPanel"})
                    }}>+</Button>
                </Form>
            </div>
        )
    }
}
export default Panel