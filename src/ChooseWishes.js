/**
 * Created by user on 29.06.17.
 */
import React from'react'
import {Grid, Table,Button, ButtonToolbar, Modal as BModal} from 'react-bootstrap'
import './custom.css'


export default class ChooseWishes extends React.Component {

    state = {show: false,
             wishes:[]
    }

    showModal =() => {
        this.setState({show: true});
    }

    hideModal = () => {
        this.setState({show: false});
    }
componentWillMount() {
    fetch(
        process.env.PUBLIC_URL + '/data/wishes.json'
    ).then(
        response => response.json()
    ).then(
        wishes => this.setState({
            wishes: wishes
        }))
}
addWish= event => {
        event.preventDefault()
    fetch(
        process.env.PUBLIC_URL + '/data/addedWishes.json', {
            method:'POST',
            body: JSON.stringify({
                "id":this.state.id,
                "content":this.state.content,
                "eventType":this.state.eventType
            })
        }

    ).then(
        response => response.json()
    ).then(
        wishes => this.setState({
            wishes: wishes
        }))

}

    render()

    {
        return (

            <ButtonToolbar>
                <Button bsStyle="primary" onClick={this.showModal} >
                    Wybierz Życzenia
                </Button>


                <BModal
                    show={this.state.show}
                    onHide={this.hideModal}
                    >
                    <BModal.Header closeButton>
                        <BModal.Title id="contained-modal-title-lg">{this.props.name} {this.props.surname}</BModal.Title>
                    </BModal.Header>
                    <BModal.Body>
                            <div>
                                <Table striped bordered condensed hover responsive>
                                    <thead>
                                    <tr>

                                        <th>Rodzaj</th>
                                        <th>Treść</th>
                                        <th>Dodaj życzenia</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.wishes.map(
                                        wish => (
                                            <tr key={wish.id}>
                                                <td >{wish.eventType}</td>
                                                <td>{wish.content}</td>
                                                <td><Button bsStyle="success" type="submit" bsSize="large" block onClick={this.addWish}>Dodaj życzenia</Button></td>


                                            </tr>
                                        )
                                    )
                                    }
                                    </tbody>
                                </Table>
                            </div>





                    </BModal.Body>
                    <BModal.Footer>
                        <Button onClick={this.hideModal}>Close</Button>
                    </BModal.Footer>
                </BModal>
            </ButtonToolbar>

        );
    }
}