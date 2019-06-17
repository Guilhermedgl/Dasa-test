import React from 'react';
import PropTypes from 'prop-types';
import './search.css';

const Search = ({ handleChange }) => {
  return (
    <div className="container-input">
      <input className="input" type="text" placeholder="Pesquise por um Pokemon" onChange={handleChange} />
    </div>
  );
};

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
}

export default Search;