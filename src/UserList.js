import React from 'react';

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
            <table>
                <thead>
                <tr>
                    <td>
                        id
                    </td>
                    <td>
                        Username
                    </td>
                    <td>
                        First Name
                    </td>
                    <td>
                        Last Name
                    </td>
                    <td>
                        E-mail
                    </td>
                    <td>
                        Last login
                    </td>
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
            </table>
        )
    }
}

export default UserList;