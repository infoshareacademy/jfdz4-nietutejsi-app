import React, { Component } from 'react';
import './App.css';

class Wishes extends Component {
  constructor(props) {
    super(props)

      this.state = {
        greetings: [],
        searchValue: ''
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

      this.handleSearch = event => this.setState ({
          searchValue: event.target.value
      })
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Szukaj życzeń!" onChange={this.handleSearch}/>
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
              this.state.greetings.filter(
              wish => (
              this.state.searchValue === '' ? true : [
              wish.content,
              wish.eventType
              ].map(
              wish => wish.toLowerCase()
              ).some(searchValue => searchValue.includes(this.state.searchValue.toLowerCase()
              )
              )
              )
              ).map(
                  wish => (
                      <tr key={wish.id}>
                        <td>
                            {wish.eventType}
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
