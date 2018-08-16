import React, { Component } from "react";

import Main from "./components/Main";
import Header from "./components/Header";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
