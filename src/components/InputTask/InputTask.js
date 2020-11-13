import React, { Component } from "react";

export default class InputTask extends Component {

  state = {
    inputValue: ""
  };

  onInputChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onInputTask(this.state.inputValue);
    this.setState({
      inputValue: ""
    });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <form
        className="input-group mt-2"
        onSubmit={ this.onSubmit }
      >
        <input
          className="form-control"
          placeholder="Enter new task here..."
          onChange={ this.onInputChange }
          value={ inputValue }
        />
        <div className="input-group-append">
          <button className="btn btn-outline-primary" type="submit">Add</button>
        </div>
      </form>
    );
  };
}
