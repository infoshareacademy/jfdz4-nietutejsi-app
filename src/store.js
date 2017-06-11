import { createStore } from 'redux'

import reducer from './state/reducer'

const usersKey = 'usersData'

const persistedUsers = JSON.parse(localStorage.getItem(usersKey))

const initialState = persistedUsers ? {
  users: persistedUsers
} : undefined

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(
  () => {
    const stateToPersist = store.getState().users
    localStorage.setItem(usersKey, JSON.stringify(stateToPersist))
  }
)

export default store