import React from 'react'
import {Button, Form} from 'react-bootstrap'
import 'react-datepicker/dist/react-datepicker.css'
import Picker from './DataPicker'

class Panel extends React.Component{

    render(){
        return (
            <div>
                <Form inline>
                <select defaultValue="URODZINY">
                    <option value="URODZINY">URODZINY</option>
                    <option value="IMIENINY">IMIENINY</option>
                </select>
                    <Picker/>


                </Form>

            </div>
        )
    }
}
export default Panel