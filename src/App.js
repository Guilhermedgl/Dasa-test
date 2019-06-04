import React, { Component } from 'react';
import axios from 'axios';
import Home from './components/home'

class App extends Component {
  constructor() {
    super();
    this.state = {
		  pokemons: [],
    }
    this.getPokemons = this.getPokemons.bind(this);
  }

  async getPokemons() {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
    this.setState({ pokemons: response.data.results });
  }

  async componentDidMount() {
    await this.getPokemons();
  }

  render() {
    return (
      <Home pokemons={this.state.pokemons} />
    );
  }
}

export default App;
