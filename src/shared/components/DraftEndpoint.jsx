import React, { PropTypes, Component } from 'react'
import Inspector from 'react-json-inspector'
import DraftEditor from './DraftEditor'

export default class Draft extends Component {

  static propTypes = {
    response: PropTypes.object,
  }

  render() {
    return (
      <div>
        <h2>Draft</h2>
        <Inspector data={this.props.response}
                   search={false}
                   isExpanded={(keypath, query) => true}/>

        <DraftEditor response={JSON.stringify(this.props.response)} />
      </div>
    )
  }
}
