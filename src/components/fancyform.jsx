import React, { Component } from "react";

class Fancyform extends Component {
  static availableOptions = [
    "apple",
    "grape",
    "cherry",
    "orange",
    "pear",
    "peach"
  ];

  state = {
    multiline: "",
    commasepareted: "",
    multiselect: []
  };

  handleCommaSeparatedChange = event => {
    const { value } = event.target;
    const allValls = value
      .split(",")
      .map(v => v.trim())
      .filter(Boolean);
    this.setState({
      commasepareted: value,
      multiline: allValls.join("\n"),
      multiselect: allValls.filter(v => Fancyform.availableOptions.includes(v))
    });
  };

  handleMultilineChange = event => {
    const { value } = event.target;
    const allValls = value
      .split("\n")
      .map(v => v.trim())
      .filter(Boolean);
    this.setState({
      commasepareted: allValls.join(","),
      multiline: value,
      multiselect: allValls.filter(v => Fancyform.availableOptions.includes(v))
    });
  };

  handleMultiSelectChange = event => {
    // const allValls = Array.from(event.target.selectedOptions.map(o => o.value));
    // this.setState({
    //   multiselect: allValls,
    //   multiline: allVals.join("\n"),
    //   commasepareted: allVals.join(",")
    // });
  };

  render() {
    const { commasepareted, multiline, multiselect } = this.state;
    return (
      <form action="" className="form-group">
        <div>
          <label> comma</label>
          <br />
          <input
            type="text"
            name=""
            value={commasepareted}
            onChange={this.handleCommaSeparatedChange}
            id=""
          />
        </div>
        <div>
          <label> multiline</label>
          <br />
          <textarea
            value={multiline}
            rows={Fancyform.availableOptions.length}
            onChange={this.handleMultilineChange}
          />
        </div>
        <div />
      </form>
    );
  }
}

export default Fancyform;