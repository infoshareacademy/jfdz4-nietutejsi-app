const initialState = {
  sortOrder: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'userListSorting/LAST_LOGIN':
      return {
        ...state,
        sortOrder: action.order
      }
    case 'userListSorting/RESET':
      return {
        ...state,
        sortOrder: null
      }
    default:
      return state
  }
}