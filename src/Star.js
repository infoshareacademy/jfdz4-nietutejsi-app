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
            star: 'yellow'
        })}
    }

    render(){
        return(
            <div>{
                this.state.greetings.map(
                    greeting => (

                        <img  onClick={ () =>{this.showStar
                this.setState({
                favoriteGreetings: this.state.favoriteGreetings.filter(
                  id => id !== greeting.id).concat(greeting.id)})}}

                              style={{"width": "40px"}}
                              src={"/gwiazda.png"}
                              alt="gwiazda"/>))}
            </div>
        )
    }
}
export default Star