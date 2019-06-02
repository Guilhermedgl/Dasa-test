import React, { Component } from 'react';
import Navbar from '../navbar';
import Card from '../card';
import Search from '../search';
import axios from 'axios';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonsList: [],
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    	.then(response => {
        this.setState({ pokemonsList: response.data.results })
			})
			.catch(error => console.log(error))
  }

  handleChange(e) {
    e.preventDefault();
    const pokemonsList = this.props.pokemons;
    const search = e.target.value.toLowerCase();
    const filteredList = pokemonsList.filter(pokemon => {
      const name = pokemon.name.toLowerCase();
       if (name.includes(search)){
        return pokemon;
      }
    })
    this.setState({ pokemonsList: filteredList })
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Search handleChange={this.handleChange}/>
          <div>
            <h3 className="notes">Notas</h3>
            {this.state.pokemonsList.map((pokemon, idx) => {
              return  <Card pokemon={pokemon} key={idx} />
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;