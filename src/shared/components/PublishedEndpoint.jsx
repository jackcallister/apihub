import React, { PropTypes, Component } from 'react'
import Inspector from 'react-json-inspector'
import PublishedEndpointForm from './PublishedEndpointFormConnector'

export default class Published extends Component {

  static propTypes = {
    response: PropTypes.object,
  }

  render() {
    return (
      <div>
        <h2>Published</h2>
        <Inspector data={this.props.response}
                   search={false}
                   isExpanded={(keypath, query) => true}/>

        <PublishedEndpointForm />
      </div>
    )
  }
}
