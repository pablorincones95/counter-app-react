import React, { Component } from "react";

class NameForm extends Component {
  state = { error: null };
  handleSubmit = event => {
    event.preventDefault();
    const value = this.inputNode.value;
    const error = this.props.getErrorMessage(value);
    if (error) {
      alert(`error :${error}`);
    } else {
      alert(`succes :${value}`);
    }
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ error: this.props.getErrorMessage(value) });
  };

  componentDidMount() {
    this.setState({ error: this.props.getErrorMessage("") });
  }

  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label>
            Name:
            <input
              type="text"
              onChange={this.handleChange}
              className="form-control"
              ref={node => (this.inputNode = node)}
            />
            {error ? (
              <div className="alert alert-danger m-2" role="alert">
                {error}
              </div>
            ) : null}
          </label>
        </div>
        <div className="form-group row">
          <button
            disabled={Boolean(error)}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default NameForm;