import React from 'react';

class ControlledInput extends React.Component {
  state = {
    value: '',
    firstName: "",
    lastName: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.sendFormDataSomewhere(this.state)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.state);
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input onChange={this.handleChange}
        type="text"
        name="firstName"
        value={this.state.firstName} />
        <input onChange={this.handleChange}
        type="text"
        name="lastName"
        value={this.state.lastName} />
      </form>
    );
  }
}

export default ControlledInput;
