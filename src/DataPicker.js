/**
 * Created by user on 17.06.17.
 */
import React from 'react';
import DatePicker from 'react-datepicker';


import 'react-datepicker/dist/react-datepicker.css';



class Picker extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }



    render() {
        return <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
        />;
    }
}
export default Picker