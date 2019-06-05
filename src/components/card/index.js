import React from 'react';
import './card.css';

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <p className="name">{pokemon.name}</p>
      <p className="date">17-08-2017</p>
    </div>
  );
};

export default Card;