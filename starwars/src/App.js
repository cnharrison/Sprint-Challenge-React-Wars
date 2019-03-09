import React, { Component } from "react";
import "./App.css";
import NameList from "./NameList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextPage: "",
      prevPage: ""
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people");
  }

  clickedPrevious() {
    this.getCharacters(this.state.prevPage);
  }

  clickedNext() {
    this.getCharacters(this.state.nextPage);
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          starwarsChars: data.results,
          nextPage: data.next,
          prevPage: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    let nextExists = this.state.nextPage ? "" : "nextNull";
    let prevExists = this.state.prevPage ? "" : "prevNull";
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <NameList
          characters={this.state.starwarsChars}
          clickedPrevious={this.clickedPrevious}
          clickedNext={this.clickedNext}
        />
        <button
          className={`${prevExists}`}
          onClick={event => {
            this.clickedPrevious();
          }}
        >
          Previous
        </button>
        <button
          className={`${nextExists}`}
          onClick={event => {
            this.clickedNext();
          }}
        >
          Next
        </button>
      </div>
    );
  }
}

export default App;
