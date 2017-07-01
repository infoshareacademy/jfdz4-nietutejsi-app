import React from 'react'
import {Table, Grid} from 'react-bootstrap'
import Modal from './Modal'
import moment from 'moment';


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

            <Grid>
                <div className="scroll">
                <Table striped bordered condensed hover responsive>
                <thead>
                <tr>

                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Email</th>
                    <th>Okazja</th>
                    <th>Data</th>
                    <th>Wszystkie życzenia</th>
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
                            <td>{moment(profil.lastLogin).format('L')}</td>
                            <td><Modal name={profil.name}
                                       surname={profil.surnameValue || ''}
                            /></td>
                        </tr>
                    )
                )
                }
                </tbody>
            </Table>
                </div>
            </Grid>

        )


    }
}
export default Osoby
