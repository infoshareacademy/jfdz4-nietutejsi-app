import React from 'react'
import firebase from 'firebase'

export default class TestView extends React.Component {
    render(){
        return (
            <div>
                <button onClick={() => firebase.auth().signOut()}>Wyloguj się</button>
            </div>
        )
    }
}