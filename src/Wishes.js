import React, {Component} from 'react';
import './App.css';
import './Wishes.css';
import Star from './Star'
import {FormGroup, Navbar, Button, FormControl} from 'react-bootstrap';

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
            }, () => {
                this.state.greetings.filter(
                    greating => this.state.favoriteGreetings.includes(greating.id)
                )
            }))
        this.handleSearch = event => this.setState({
            searchValue: event.target.value
        })
    }

    render() {
        return (
            <div>
                <div className="szukaj">
                    <input className="szukaj-input" type="text" placeholder="Szukaj życzeń!"
                           onChange={this.handleSearch}/>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th className="title-rodzaj">
                            Rodzaj
                        </th>
                        <th className="title-tresc">
                            Treść
                        </th>
                        <th className="title-ulubione">
                            <p>Ulubione</p>
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
                                    <td className="wish-text">
                                        {wish.content}
                                    </td>
                                    <td className="alignc">
                                        <Star className="star"/>
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


