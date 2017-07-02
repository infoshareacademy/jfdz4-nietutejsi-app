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
    users: state.userList,
    userListSorting: state.userListSorting
  }),
  dispatch => ({
    begin: () => dispatch({type: 'userList/FETCH__BEGIN'}),
    success: data => dispatch({type: 'userList/FETCH__SUCCESS', data}),
    failure: error => dispatch({type: 'userList/FETCH__FAILURE', error}),
    sortLastLogin: order => dispatch({ type: 'userListSorting/LAST_LOGIN', order}),
    sortReset: () => dispatch({type: 'userListSorting/RESET'})
  })
)(class UserList extends React.Component {

        state = {
            activeFilters: [],
            searchValue: ''
        }

        componentWillMount() {
          this.props.begin()
          fetch(
            `${process.env.PUBLIC_URL}/data/usersData.json`
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

      render() {
        const {data, fetching, error} = this.props.users
        const {sortOrder} = this.props.userListSorting
        const sortingMarks = {
          'DSC': <span>&#8595;</span>,
          'ASC': <span>&#8593;</span>
        }
        const sortingMark = sortingMarks[this.props.userListSorting.sortOrder] || null


      let sortedData = data

      if (sortOrder !== null) {
        sortedData = data.sort(
          (a, b) => {
            if (sortOrder === 'ASC') {
              return b.lastLoginGetTime - a.lastLoginGetTime
            }
            if (sortOrder === 'DSC') {
              return a.lastLoginGetTime - b.lastLoginGetTime
            }
          }
        )
      }

      if (this.props.users.data === null) {
        return null
      } else if (
          (sortOrder === null)) {
          sortedData = data.sort(
              (a, b) => {
                return a.id - b.id
              }
          )
        }

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
                onClick={
                () => this.props.sortLastLogin(
                [null, 'DSC'].includes(sortOrder) ? 'ASC' : 'DSC'
                )}
            >
                Sort by last login
              {sortingMark}
            </Button>
            <Button
              onClick={
              () => this.props.sortReset()
              }>
              Reset sort
            </Button>
            {
              this.props.users.fetching === true ? <p>Fetching data</p> : null
            }
            {
              this.props.users.error !== null ? <p>{this.props.users.error}</p> : null
            }
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
                  this.props.users.data === null ? null : sortedData.filter(
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