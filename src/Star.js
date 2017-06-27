import React from 'react';

class Star extends React.Component {
    constructor(props) {
    super(props)
        this.state= {
        star: 'white'
        }
        this.showStar= () => {this.setState({
            star: 'yellow'
        })}
    }


    render(){
        return(
            <div>
                <img  onClick={this.showStar}
                      style={{"width": "40px"}}
                      src={"/gwiazda.png"}
                      alt="gwiazda"/>
            </div>
        )
    }
    }
    export default Star