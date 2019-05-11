import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar.Component";
import Counters from "./components/counters.Component";
import NameForm from "./components/nameform";
import Fancyform from "./components/fancyform";
import Flags from "./components/flags";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ],
    error: null
  };

  constructor() {
    super();
    console.log("app constructor");
  }

  componentDidMount() {
    //AJAX calls
    console.log("app mounted");
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState(counters);
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  getErrorMessage = value => {
    if (value.length < 3) {
      return "Este campo deve conte ao menos 3 caracteres";
    }
    if (!value.includes("s")) {
      return "A entrada desse campo deve conter o caracter `s`";
    }
    return null;
  };

  render() {
    console.log("App - rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <Flags />
        <main className="container">
          <div className="row">
            <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
            />
          </div>
          <div className="row">
            <NameForm getErrorMessage={this.getErrorMessage} />
          </div>
          <div className="row">
            <Fancyform />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;