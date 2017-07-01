import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './App';
import './index.css';


var config = {
  apiKey: "AIzaSyCYOjye_OjER-kEt-FjrOenCi7QjI75ivY",
  authDomain: "nietutejsi-526ca.firebaseapp.com",
  databaseURL: "https://nietutejsi-526ca.firebaseio.com",
  projectId: "nietutejsi-526ca",
  storageBucket: "",
  messagingSenderId: "752237085066"
};
firebase.initializeApp(config);



ReactDOM.render(
    <App />,
    document.getElementById('root')
);
