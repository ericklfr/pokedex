import React from 'react';
import useSearchPokemon from '../../hooks/useSearchPokemon';

const SearchInput = () => {
  const [, setSearchList] = useSearchPokemon();

  return (
    <div className="search-input-container">
      <input type="text" onChange={(e) => setSearchList(e.target.value)}></input>
    </div>
  );
};

export default SearchInput;
