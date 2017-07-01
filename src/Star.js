import React from 'react';

class Star extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            greetings: [],
            star: 'white',
            favoriteGreetings: []
        }

        fetch(
            process.env.PUBLIC_URL + '/data/greetings.json'
        ).then(
            response => response.json()
        ).then(
            greetings => this.setState({
                greetings: greetings
            })
        )

        this.showStar= () => {this.setState({
            star: this.state.star === 'white' ? 'yellow' : 'white'
        })}}

    render(){
        return(
            <div>
            <img onClick={() => {
                this.showStar()
            }}
                 style={{"width": "40px"}}
                 src={this.state.star === 'white' ? "/gwiazda.png" : "/gwiazda2.png"}
                 alt="gwiazda"/>
            </div>
        )}}
export default Star