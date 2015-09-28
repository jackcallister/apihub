import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapPublishedEndpointStateToProps } from '../selectors'
import PublishedEndpoint from './PublishedEndpoint'

class PublishedEndpointConnector extends Component {

  render() {
    return (
      <PublishedEndpoint {...this.props} />
    )
  }
}

export default connect(mapPublishedEndpointStateToProps)(PublishedEndpointConnector)
