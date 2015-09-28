import { combineReducers } from 'redux'
import project from './projectReducer'
import publishedEndpoint from './publishedEndpointReducer'
import draftEndpoint from './draftEndpointReducer'

export default combineReducers({
  project,
  publishedEndpoint,
  draftEndpoint,
})
