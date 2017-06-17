import React from 'react'
import {Button, Form} from 'react-bootstrap'
import 'react-datepicker/dist/react-datepicker.css'
import Picker from './DataPicker'

import DropButton from "./DropdownButton";

class Panel extends React.Component{



handleSavePanel = {}


    render(){
        return (
            <div>
                <Form inline>
                        <DropButton />
                    <Picker/>
                    <Button>Wybierz życzenia</Button>
                    <Button bsStyle="success" onClick={this.handleSavePanel}>+</Button>
                </Form>
            </div>
        )
    }
}
export default Panel