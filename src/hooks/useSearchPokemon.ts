import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import pokemonsNames from '../selectors/pokemonsNames';

const useSearchPokemon = (): any => {
  const [list, setList] = useState<string[]>(['']);
  const pokemonsName = useRecoilValue(pokemonsNames);

  const onSearch = (searchTerm: string) => {
    setList(pokemonsName.filter((name) => name.includes(searchTerm)).slice(0, 4));
  };

  return [list, onSearch];
};

export default useSearchPokemon;
