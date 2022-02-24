import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { pokemonsListState } from '../atoms';
import { PokemonProps } from '../models';
import axios from 'axios';

const usePokemonList = (): any => {
  const [list, setList] = useRecoilState(pokemonsListState);

  useEffect(() => {
    if (!list.length) {
      getList();
    }
  }, []);

  const getList = async (): Promise<PokemonProps | void> => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1126&offset=0');
    setList(response.data.results);
  };

  return [list, getList];
};

export default usePokemonList;
