import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../../shared/reducers'
import Project from '../../shared/components/ProjectConnector'
import { fetchAPIResponse } from '../webUtils'

export default (req, res, next) => {

  // Get the token and URL from the client

  const state = createStore(reducers).getState()

  fetchAPIResponse(state.publishedEndpoint.url, state.publishedEndpoint.token).then((body) => {

    const payload = {
      ...state,
      publishedEndpoint: {
        ...state.publishedEndpoint,
        response: body
      }
    }

    console.log(payload)

    const store = createStore(reducers, payload)

    const app = React.createElement(Provider, { store: store },
      React.createElement(Project, null)
    )

    const html = ReactDOMServer.renderToStaticMarkup(app)

    res.render('index', {
      html: html,
      payload: JSON.stringify(payload)
    })
  })
}
