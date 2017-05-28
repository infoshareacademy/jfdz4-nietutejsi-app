import React from 'react';
import {
  Table,
  DropdownButton,
  MenuItem,
  FormGroup,
  FormControl,
} from 'react-bootstrap'
class UserList extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            users: [],
            sortButtonValue: 'Sort by ',
            activeFilters: [],
            searchValue: '',
            sortOrder: null
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
      }, () => this.setState({
        activeFilters: this.state.activeFilters.filter(
            phrase => phrase !== 'search'
        ).concat(this.state.searchValue === '' ? [] : 'search')
      }))

      this.handleFirstNameSort = () => this.setState({
        activeFilters: this.state.activeFilters.includes('sortByName') ? this.state.activeFilters : this.state.activeFilters.concat('sortByName'),
        users: this.state.sortOrder === 'Ascending' ? this.state.users.sort((a, b) =>
            a.name !== b.name ? a.name < b.name ? -1 : 1 : 0
        ) : this.state.users.sort((a, b) =>
            a.name !== b.name ? a.name < b.name ? -1 : 1 : 0
        ).reverse()
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
            <DropdownButton title={this.state.sortButtonValue}>
              <MenuItem
                onClick={this.handleFirstNameSort}>
                First Name
              </MenuItem>
              <MenuItem>Last login</MenuItem>
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
                            ].map(
                                user => user.toLowerCase()
                          ).some(searchValue => searchValue.includes(this.state.searchValue.toLowerCase()
                          )
                          )
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