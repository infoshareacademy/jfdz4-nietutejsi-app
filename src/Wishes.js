import React, {Component} from 'react';
import './App.css';
import Star from './Star'

class Wishes extends Component {
    constructor(props) {
        super(props)
            this.state = {
            greetings: [],
            searchValue: '',
            //     star: 'white'
            favoriteGreetings: []
        }
        fetch(
            process.env.PUBLIC_URL + '/data/greetings.json'
        ).then(
            response => response.json()
        ).then(
            greetings => this.setState({
                greetings: greetings
            },() => {
            this.state.greetings.filter(
                greating => this.state.favoriteGreetings.includes(greating.id)
            )}))
        this.handleSearch = event => this.setState({
            searchValue: event.target.value
        })}
    render() {
        return (
            <div>
              <input type="text" placeholder="Szukaj życzeń!" onChange={this.handleSearch}/>
              <table>
                <thead>
                <tr>
                  <th className="title1">
                    Rodzaj
                  </th>
                  <th>
                    Treść
                  </th>
                    <th>
                        <p>Dodaj do ulubionych</p>
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
                                <td>
                                    <Star/>


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
