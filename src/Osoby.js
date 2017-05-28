import React from 'react'
import {Table} from 'react-bootstrap'

class Osoby extends React.Component {
    constructor(props) {

        super(props)
        this.state = {
            users : [ ]
        }

        fetch(
            process.env.PUBLIC_URL + '/data/users.json'
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
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
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
