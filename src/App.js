import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import {SearchBox} from './components/search-box/search-box.component';
import "./App.css";

class App extends Component {
  //State
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response =>
      response.json().then(users => this.setState({ monsters: users }))
    );
  }

  //es6 function with bind  =>
  //A good rule of thumb is this: Use arrow functions on any class methods you define and aren't part of React (i.e. render(), componentDidMount()). 
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  };

  render() {
    // const monsters = this.state.monsters
    //includes() to make sure the serched word mathes the list.

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      //monsters as props
      //if you want to see the change on 'state' immideatly after we set it then we need to add
      // a second argument function () => thats gets called right after the setstate.example  'this.setState({searchField: e.target.value}, () => console.log(this.state));'
      //dont put setState inside render(), iy will reload every time and cause issues
      <div className="App">
       <SearchBox
       placeholder= 'search monsters'
       handleChange={this.handleChange}
       />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
