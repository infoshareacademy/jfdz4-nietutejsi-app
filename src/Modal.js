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
                <Button bsStyle="primary" onClick={this.showModal}>
                    Wyświetl wszystkie życzenia solenizanta
                </Button>

                <BModal
                    {...this.props}
                    show={this.state.show}
                    onHide={this.hideModal}
                    dialogClassName="custom-modal"
                >
                    <BModal.Header closeButton>
                        <BModal.Title id="contained-modal-title-lg">{this.props.name}</BModal.Title>
                    </BModal.Header>
                    <BModal.Body>
                        <h4>Wrapped Text</h4>
                        <p>illo omnis laborum hic enim minima! Similique. Dolor voluptatum reprehenderit nihil adipisci aperiam voluptatem soluta
                            magnam accusamus iste incidunt tempore consequatur illo illo odit. Asperiores nesciunt iusto nemo animi ratione. Sunt odit similique doloribus temporibus reiciendis! Ullam. Dolor dolores veniam animi sequi dolores molestias voluptatem iure velit. Elit dolore quaerat incidunt enim aut distinctio. Ratione molestiae laboriosam
                            similique laboriosam eum et nemo expedita. Consequuntur perspiciatis cumque dolorem.</p>
                    </BModal.Body>
                    <BModal.Footer>
                        <Button onClick={this.hideModal}>Close</Button>
                    </BModal.Footer>
                </BModal>
            </ButtonToolbar>
        );
    }
}

