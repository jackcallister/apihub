import React, { PropTypes, Component } from 'react'
import DraftEndpoint from './DraftEndpointConnector'
import PublishedEndpoint from './PublishedEndpointConnector'
// import Comments from './CommentsConnector'

export default class Project extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {
    return (
      <main className='wrapper'>
        <h1>{this.props.name}</h1>

        <section className='api-viewer'>
          <DraftEndpoint />
          <PublishedEndpoint />
        </section>
      </main>
    )
  }
}
