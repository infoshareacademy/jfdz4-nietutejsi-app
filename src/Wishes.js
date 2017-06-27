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
        <input type="text" placeholder="Szukaj życzeń!"/>
        <table>
          <thead>
          <tr>
            <th>
              Rodzaj
            </th>
            <th>
              Treść
            </th>
          </tr>
          </thead>
          <tbody>
          {
              this.state.greetings.map(
                  wish => (
                      <tr key={wish.id}>
                        <td>
                            {wish.eventType === 'birthday' ? "Urodziny" : wish.eventType === 'nameday' ? "Imieniny" : wish.eventType === 'chrisEve' ? 'Boże Narodzenie' : wish.eventType === 'easter' ? 'Wielkanoc' : null }
                        </td>
                        <td>
                            {wish.content}
                        </td>
                      </tr>
                  )
              )
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Wishes;
