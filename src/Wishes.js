import React, { Component } from 'react';
import './App.css';

class Wishes extends Component {
  constructor(props) {
    super(props)

      this.state = {
        greetings: []
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
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Wishes;
