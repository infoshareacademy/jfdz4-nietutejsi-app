import React from 'react'
import {DropdownButton, MenuItem} from  'react-bootstrap'

class DropButton extends React.Component {
state={
    btnTitle:'Wybierz okazje'
}
    handleChange =(evt) => {
        this.setState({btnTitle: evt})
}
    render(){
        return (
            <div>
                <DropdownButton title={this.state.btnTitle} id="bg-vertical-dropdown-1"
                                onSelect={this.handleChange}>
                    <MenuItem eventKey="1">Urodziny</MenuItem>
                    <MenuItem eventKey="2">Imieniny</MenuItem>
                </DropdownButton>
            </div>
        )
    }
}
export default DropButton