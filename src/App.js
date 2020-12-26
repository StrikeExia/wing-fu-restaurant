import React, { Component } from "react";
import Header from "./components/Header.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      alphabet: ["a", "c", "b"],
      title: "hello",
    };
  }

  sortAlphabet = () => {
    this.setState({ alphabet: this.state.alphabet.sort() });
  };

  changeTitle = () => {
    this.setState({ title: "World" });
  };

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        {this.state.alphabet.map((item, key) => item)}
        <br></br>
        <button onClick={this.sortAlphabet}>Sort</button>
        <button onClick={this.changeTitle}>change title</button>
      </div>
    );
  }
}

export default App;
