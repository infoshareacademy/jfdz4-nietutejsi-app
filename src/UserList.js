import React from 'react';
import {
  Table,
  DropdownButton,
  MenuItem,
  FormGroup,
  FormControl
} from 'react-bootstrap'
class UserList extends React.Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            users: [],
            searchValue: ''
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

      this.handleSearchUpdate = event => this.setState ({
        searchValue: event.target.value
      })
    }
    render() {
        return (
          <div>
            <hr/>
            <p style={{color: 'grey'}}>User list</p>
            <FormGroup>
              <FormControl
                onChange={this.handleSearchUpdate}
              />
            </FormGroup>
            <DropdownButton title="Sort by">
              <MenuItem>Last login</MenuItem>
              <MenuItem>Alphabetic</MenuItem>
            </DropdownButton>
            <Table hover striped responsive>
                <thead>
                <tr>
                    <th>id</th>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>E-mail</th>
                    <th>Gender</th>
                    <th>Last login</th>
                </tr>
                </thead>
                <tbody>
                {
                  this.state.users.filter(
                      user => (
                          this.state.searchValue === '' ? true : [
                              user.name,
                              user.username,
                              user.surname
                            ].includes(this.state.searchValue)
                      )
                  ).map(
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
                              {user.gender}
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