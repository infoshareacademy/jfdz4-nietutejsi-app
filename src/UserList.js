import React from 'react';
import {connect} from 'react-redux'
import {
  Table,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap'

export default connect (
  state => ({
    users: state.userList
  }),
  dispatch => ({
    begin: () => dispatch({type: 'userList/FETCH__BEGIN'}),
    success: data => dispatch({type: 'userList/FETCH__SUCCESS', data}),
    failure: error => dispatch({type: 'userList/FETCH__FAILURE', error})
  })
)(class UserList extends React.Component {

        state = {
            activeFilters: [],
            searchValue: '',
            sortOrder: null
        }

        componentWillMount() {
          this.props.begin()
          fetch(
            `${process.env.PUBLIC_URL}/data/users.json`
          ).then(
            response => response.json().then(
              data => this.props.success(data)
            ).catch(
              error => this.props.failure('Malformed JSON.')
            )
          ).catch(
            error => this.props.failure('Connection error.')
          )
        }

      handleSearchUpdate = event => this.setState ({
        searchValue: event.target.value
      }, () => this.setState({
        activeFilters: this.state.activeFilters.filter(
            phrase => phrase !== 'search'
        ).concat(this.state.searchValue === '' ? [] : 'search')
      }))

      handleLastLoginSort = () => this.setState({
        activeFilters: this.state.activeFilters.includes('sortByLastLogin') ? this.state.activeFilters : this.state.activeFilters.concat('sortByLastLogin'),
        sortOrder: this.state.sortOrder === (null || 'Descending') ? 'Ascending' : 'Descending',
        users: this.state.sortOrder === 'Descending' || null ? this.state.users.sort((a, b) =>
          a.lastLoginGetTime - b.lastLoginGetTime
        ) : this.state.users.sort((a, b) =>
        a.lastLoginGetTime - b.lastLoginGetTime
        ).reverse()
      })

      handleSortReset = () => this.setState({
        activeFilters: this.state.searchValue !== '' ? this.state.activeFilters = ['search'] : [],
        sortOrder: this.state.sortOrder = null,
        users: this.state.users.sort((a, b) =>
          a.id - b.id
        )
      })

    render() {
      const sortingMarks = {
        'Descending': <span>&#8595;</span>,
        'Ascending': <span>&#8593;</span>
      }

      const sortingMark = sortingMarks[this.state.sortOrder] || null

        return (
          <div>
            <hr/>
            <p style={{color: 'grey'}}>User list</p>
            <FormGroup>
              <FormControl
                placeholder="Search for..."
                onChange={this.handleSearchUpdate}
              />
            </FormGroup>
            <Button
                onClick={this.handleLastLoginSort}>
                Sort by last login
              {sortingMark}
            </Button>
            <Button
              onClick={this.handleSortReset}>
              Reset sort
            </Button>
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
                  this.props.users.data === null ? null : this.props.users.data.filter(
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
)