import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

const titleCase = (name) => {
  return name[0].toUpperCase() + name.slice(1);
};

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <p className="name">{titleCase(pokemon.name)}</p>
      <p className="date">17-08-2017</p>
    </div>
  );
};

Card.propTypes = {
  pokemon: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Card;