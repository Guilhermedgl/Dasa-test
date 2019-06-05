import React, { Component } from 'react';
import Navbar from '../navbar';
import Card from '../card';
import Search from '../search';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  // Change the search property on state
  handleChange(e) {
    e.preventDefault();
    const search = e.target.value.toLowerCase();
    this.setState({ search })
  }

  // Return a filtered array of pokemons with search property
  renderList() {
    const list = [...this.props.pokemons];
    const { search } = this.state;
    const re = new RegExp(search, 'gi');
    const reVowels = new RegExp(/[aeiou]/, 'gi');
    return list.filter(pokemon => {
      if (pokemon.name.match(re) || pokemon.name.replace(reVowels, '').match(re)) {
        return pokemon;
      }
      return null;
    });
  }

  render() {
    return (
      <section>
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
      </section>
    );
  }
}

export default Home;
