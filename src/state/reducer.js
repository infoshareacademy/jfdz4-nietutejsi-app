import userList from './parts/userList'

export default (state = {}, action) => {
  return {
    userList: userList(state.userList, action)
  }
}