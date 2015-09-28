import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapDraftEndpointStateToProps } from '../selectors'
import DraftEndpoint from './DraftEndpoint'

class DraftEndpointConnector extends Component {

  render() {
    return (
      <DraftEndpoint {...this.props} />
    )
  }
}

export default connect(mapDraftEndpointStateToProps)(DraftEndpointConnector)
