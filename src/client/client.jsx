import React from 'react'
import ReactDOM from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { devTools, persistState } from 'redux-devtools'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'
import reducers from '../shared/reducers'
import otherReducer from './otherReducer'
import Project from '../shared/components/ProjectConnector'
import { combineReducers } from 'redux'

import '../../node_modules/react-json-inspector/json-inspector.css'
import '../../node_modules/primer-css/css/primer.css'
import '../shared/styles/app.css'

const createStoreWithMiddleware = compose(
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)




console.log(...reducers)

const store = createStoreWithMiddleware(reducers, window.__DATA__)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Project />
    </Provider>,
    document.getElementById('app')
  )

  ReactDOM.render(
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>,
    document.getElementById('devtools')
  )
})
