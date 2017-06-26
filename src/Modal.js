import React from'react'
import {Button, ButtonToolbar, Modal as BModal} from 'react-bootstrap'

export default class Modal extends React.Component {

    state = {show: false

    }

    showModal =() => {
        this.setState({show: true});
    }

    hideModal = () => {
        this.setState({show: false});
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
                    <BModal.Body>
                        <h4>Dodane życzenia</h4>
                        <p>Tutaj dodane będa życzenia</p>
                    </BModal.Body>
                    <BModal.Footer>
                        <Button onClick={this.hideModal}>Close</Button>
                    </BModal.Footer>
                </BModal>
            </ButtonToolbar>
        );
    }
}

