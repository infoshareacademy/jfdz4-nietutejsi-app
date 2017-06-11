const initialState = {
  data: null,
  fetching: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'userList/FETCH__BEGIN':
      return {
        ...state,
        fetching: true
      }
    case 'userList/FETCH__SUCCESS':
      return {
        ...state,
        fetching: false,
        data: action.data,
        error: null
      }
    case 'userList/FETCH__FAILURE':
      return {
        ...state,
        fetching: false,
        error: action.error
      }
    default:
      return state
  }
}