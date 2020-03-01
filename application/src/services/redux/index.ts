import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import application from './reducers/application'
import compose from './reducers/compose'
import messages from './reducers/messages'
import members from './reducers/members'

const reducer = combineReducers({
  application,
  compose,
  messages,
  members
})

export default __DEV__ ? createStore(reducer, composeWithDevTools()) : createStore(reducer)