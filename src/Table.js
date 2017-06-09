import React from 'react';


class Tabel extends React.Component {

    constructor(props) {
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


            </div>

        )
    }
}