import React from 'react';
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

export default Card;