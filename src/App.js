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

  getPokemons() {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    	.then(response => {
        this.setState({ pokemons: response.data.results })
			})
			.catch(error => console.log(error))
  }

  componentDidMount() {
    this.getPokemons()
  }

  render() {
    return (
      <Home pokemons={this.state.pokemons} />
    );
  }
}

export default App;
