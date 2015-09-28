import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapProjectStateToProps } from '../selectors'
import Project from './Project'

class ProjectConnector extends Component {

  render() {
    return (
      <Project {...this.props} />
    )
  }
}

export default connect(mapProjectStateToProps)(ProjectConnector)
