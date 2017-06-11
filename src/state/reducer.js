import userList from './parts/userList'
import userListSorting from './parts/userListSorting'

export default (state = {}, action) => {
  return {
    userList: userList(state.userList, action),
    userListSorting: userListSorting(state.userListSorting, action)
  }
}