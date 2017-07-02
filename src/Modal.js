import React from'react'
import {Table, Button, ButtonToolbar, Modal as BModal} from 'react-bootstrap'

export default class Modal extends React.Component {

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
             ' http://localhost:3020/wishes'
        ).then(response => response.json()
        ).then(
            wishes => this.setState({
                wishes:wishes
            })
        )
    }


    render()

    {
        return (
            <ButtonToolbar>
                <Button bsStyle="primary" onClick={this.showModal} style={{'width': '100%'}}>
                    Wyświetl
                </Button>

                <BModal

                    show={this.state.show}
                    onHide={this.hideModal}
                    dialogClassName="custom-modal"

                >
                    <BModal.Header closeButton>
                        <BModal.Title id="contained-modal-title-lg">{this.props.name} {this.props.surname}</BModal.Title>
                    </BModal.Header>
                    <BModal.Body >
                        <Table striped bordered condensed hover responsive>
                            <thead>
                            <tr>
                                <th>Rodzaj życzenia</th>
                                <th>Życzenie</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.wishes.map(
                                    wish => (
                                        <tr key={wish.id}>
                                            <td>{wish.eventType}</td>
                                            <td>{wish.content}</td>
                                        </tr>
                                    )
                                )
                            }
                            </tbody>

                        </Table>
                    </BModal.Body >
                    <BModal.Footer>
                        <Button onClick={this.hideModal}>Close</Button>
                    </BModal.Footer>
                </BModal>
            </ButtonToolbar>
        );
    }
}

