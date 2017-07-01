import React from 'react';
import {
  Grid,
  Button
} from 'react-bootstrap';
import './App.css';
import UserList from './UserList';
import firebase from 'firebase'

const UserListView = () => (
  <Grid>
    <div style={{textAlign: "center"}}>
      <Button style={{marginTop: '20px'}} onClick={() => firebase.auth().signOut()}>Log out</Button>
    </div>
    <UserList/>
  </Grid>
)

export default UserListView;
