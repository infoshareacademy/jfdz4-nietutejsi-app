import React from 'react'
import {Table} from 'react-bootstrap'
import Modal from './Modal'

class Osoby extends React.Component {
    constructor(props) {

        super(props)
        this.state = {
            profils : [ ]
        }

        fetch(
            ' http://localhost:3010/users'
        ).then(response => response.json()
        ).then(
            profils => this.setState({
                profils:profils
            })
        )
    }

    render() {

        return (
            <Table striped bordered condensed hover responsive>
                <thead>
                <tr>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Email</th>
                    <th>Okazja</th>
                    <th>Data</th>
                </tr>
                </thead>
                <tbody>
                {this.state.profils.map(
                    profil => (
                        <tr key={profil.id}>
                            <td >{profil.name}</td>
                            <td>{profil.surnameValue}</td>
                            <td>{profil.email}</td>
                            <td>{profil.gender}</td>
                            <td>{profil.lastLogin}</td>
                            <td><Modal/></td>
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
