import React from 'react'
import {Table} from 'react-bootstrap'
import Modal from './Modal'

class Osoby extends React.Component {
    constructor(props) {

        super(props)
        this.state = {
            users : [ ]
        }

        fetch(
            'https://secret-ocean-59384.herokuapp.com/users'
        ).then(response => response.json()
        ).then(
            users => this.setState({
                users:users
            })
        )
    }

    render() {

        return (
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                    <th>Gender</th>
                </tr>
                </thead>
                <tbody>
                {this.state.users.map(
                    user => (
                        <tr key={user.id}>
                            <td >{user.name}</td>
                            <td>{user.surname}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td><Modal /></td>
                        </tr>
                    )
                )
                }
                </tbody>
            </Table>
        )


    }
}
export default Osoby
