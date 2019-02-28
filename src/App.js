import React, { Component } from "react";
import "./App.css";
import Leaflet from "./Leaflet";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Leaflet />
        </header>
      </div>
    );
  }
}

export default App;
