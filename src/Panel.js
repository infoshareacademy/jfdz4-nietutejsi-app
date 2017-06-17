import React from 'react'
import 'react-bootstrap'

class Panel extends React.Component{

    render(){
        return (
            <div>
                <select defaultValue="URODZINY">
                    <option value="URODZINY">URODZINY</option>
                    <option value="IMIENINY">IMIENINY</option>
                </select>
            </div>
        )
    }
}
export default Panel