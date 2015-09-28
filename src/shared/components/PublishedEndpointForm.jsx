import React, { PropTypes, Component } from 'react'

export default class PublishedEndpointForm extends Component {

  static propTypes = {
    url: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
  }

  render() {
    return (
      <form>
        <dl className='form'>
          <dt><label>Endpoint URL</label></dt>
          <dd><input value={this.props.url} readOnly/></dd>
        </dl>

        <dl className='form'>
          <dt><label>Token</label></dt>
          <dd><input value={this.props.token} readOnly/></dd>
        </dl>

        <button className='btn btn-primary'>Update</button>
      </form>
    )
  }
}
