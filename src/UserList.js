import React from 'react';
import {
  Table
} from 'react-bootstrap'
class UserList extends React.Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            users: []
        }

        fetch(
          process.env.PUBLIC_URL + '/data/users.json'
        ).then(
          response => response.json()
        ).then(
          users => this.setState({
              users: users
          })
        )
    }
    render() {
        return (
          <div>
            <Table hover striped responsive>
                <thead>
                <tr>
                    <th>id</th>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>E-mail</th>
                    <th>Last login</th>
                </tr>
                </thead>
                <tbody>
                {
                  this.state.users.map(
                    user => (
                      <tr key={user.id}>
                          <td>
                              {user.id}
                          </td>
                          <td>
                              {user.username}
                          </td>
                          <td>
                              {user.name}
                          </td>
                          <td>
                              {user.surname}
                          </td>
                          <td>
                              {user.email}
                          </td>
                          <td>
                              {user.lastLogin}
                          </td>
                      </tr>
                    )
                  )
                }
                </tbody>
            </Table>
            </div>
        )
    }
}

export default UserList;