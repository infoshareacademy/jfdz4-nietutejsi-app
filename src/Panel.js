import React from 'react'
import

class Panel extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            users: []
    }
        fetch(
            process.env.PUBLIC_URL + '/data/users.json'
        ).then(
            response => response.json()
        ).then(
            users => this.setState({
                users: users
            })
        )


}
render() {
return (
    <div>
        <Grid>
            <Row>
                <Col xs={6} md={4}>
                    <Image src="/assets/thumbnail.png" rounded />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="/assets/thumbnail.png" circle />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="/assets/thumbnail.png" thumbnail />
                </Col>
            </Row>
        </Grid>
    </div>
)}
}

export default  Panel