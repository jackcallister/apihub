import React, { Component } from 'react'

export default class DraftEditor extends Component {

  constructor(props) {
    super(props)

    this.state = {
      response: this.props.response
    }
  }

  handleChange(e) {
    this.setState({
      response: e.target.value
    })
  }

  render() {
    return (
      <textarea value={this.state.response}
                onChange={(e) => { this.handleChange(e) }}/>
    )
  }
}
