import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapPublishedEndpointFormStateToProps } from '../selectors'
import PublishedEndpointForm from './PublishedEndpointForm'

class PublishedEndpointFormConnector extends Component {

  render() {
    return (
      <PublishedEndpointForm {...this.props} />
    )
  }
}

export default connect(mapPublishedEndpointFormStateToProps)(PublishedEndpointFormConnector)
