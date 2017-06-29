/**
 * Created by user on 29.06.17.
 */
import React from'react'
import {Button, ButtonToolbar, Modal as BModal} from 'react-bootstrap'


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


    render()

    {
        return (

            <ButtonToolbar>
                <Button bsStyle="primary" onClick={this.showModal} style={{'display':'inline'}} >
                    Wybierz Życzenia
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






                    </BModal.Body>
                    <BModal.Footer>
                        <Button onClick={this.hideModal}>Close</Button>
                    </BModal.Footer>
                </BModal>
            </ButtonToolbar>

        );
    }
}