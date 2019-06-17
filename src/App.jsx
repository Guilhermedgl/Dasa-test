import React, { Component } from 'react';
import axios from 'axios';
import Home from './components/home';
import { apiUrl } from './configs/api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
    }
    this.getPokemons = this.getPokemons.bind(this);
  }

  componentDidMount() {
    this.getPokemons();
  }

  // GET an array of pokemons from api url
  getPokemons() {
    axios.get(apiUrl)
      .then(response => {
        this.setState({ pokemons: response.data.results });
      })
      .catch(error => console.log(error))
  }


  render() {
    return (
      <Home pokemons={this.state.pokemons} />
    );
  }
}

export default App;
