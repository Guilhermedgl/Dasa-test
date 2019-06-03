import React, { Component } from 'react';
import Navbar from '../navbar';
import Card from '../card';
import Search from '../search';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonsList: this.props.po,
      search: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const search = e.target.value.toLowerCase();
    this.setState({search})
  }

  renderList() {
    const list = [...this.props.pokemons];
    const search = this.state.search;
    const re = new RegExp(search, 'gi') 
    const reVowels = new RegExp(/[aeiou]/, 'gi')
    return list.filter(pokemon => {
      if (pokemon.name.match(re) || pokemon.name.replace(reVowels, '').match(re)) {
        return pokemon;
      }
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Search handleChange={this.handleChange} />
          <div>
            <h3 className="notes">Notas</h3>
            {this.renderList().map((pokemon, idx) => {
              return  <Card pokemon={pokemon} key={idx} />
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;