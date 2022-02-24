import React, { FC } from 'react';
import { PokemonCard } from '../../models/pokemon-card.model';
import './style.scss';

const Card: FC<PokemonCard> = ({ image, id, name, types }) => {
  return (
    <div className="card-container">
      <img className="image" src={image}></img>
      <div className="id">{id}</div>
      <div className="name">{name}</div>
    </div>
  );
};

export default Card;
