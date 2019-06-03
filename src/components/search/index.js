import React from 'react';
import './search.css';

const Search = ({ handleChange }) => {
  return (
    <div className="container-input">
      <input className="input" type="text" placeholder="Pesquise por um Pokemon" onChange={handleChange} />
    </div>
  );
};

export default Search;