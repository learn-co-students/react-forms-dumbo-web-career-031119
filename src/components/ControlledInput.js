// Code ControlledInput Component Here
import React from 'react'

export default class ControlledInput extends React.Component {
  state = {
    firstName: "",
    lastName: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    return (
      <form>
        <input type="text" id="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName} />
        <input type="text" id="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
      </form>
    )
  }
}
