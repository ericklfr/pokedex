import React from 'react';
import { useRecoilValue } from 'recoil';
import { usePokemonList } from '../../hooks';
import Card from '../../components/Card';
import SearchInput from '../../components/SearchInput';
import pokemonsCardsSelector from '../../selectors/pokemonsCards';
import './style.scss';

const HomePage = () => {
  usePokemonList();

  const cards = useRecoilValue(pokemonsCardsSelector);
  const renderCards = cards.map((card: any) => {
    return <Card key={card.number} {...card}></Card>;
  });

  return (
    <div className="home-page-container">
      <SearchInput></SearchInput>
      <div className="catalog-container">{renderCards}</div>
    </div>
  );
};

export default HomePage;
