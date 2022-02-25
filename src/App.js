import React, { Component } from "react";
import SearchBox from "./components/searchBox/searchBox-component.jsx";
import CardList from "./components/card-component/card-list-component.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monisters: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monisters: users }));
  }
  serchHandler = (e) => {
    this.setState({ searchField: e.target.value }, () =>
      console.log(this.state)
    );
  };
  render() {
    const { monisters, searchField } = this.state;
    const filteredMonisters = monisters.filter((monister) =>
      monister.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="head1">beautiful Robots</h1>
        <SearchBox
          placeholder="search robots"
          handlechange={this.serchHandler}
        />
        <CardList monisters={filteredMonisters} />
      </div>
    );
  }
}

export default App;
