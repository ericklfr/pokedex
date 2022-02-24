import { selector } from 'recoil';
import { pokemonsListState } from '../atoms';
import { PokemonProps } from '../models';

const pokemonsNames = selector({
  key: 'pokemonsNames',
  get: ({ get }) => {
    const pokemonsList = get(pokemonsListState);

    return pokemonsList.map((pokemon: PokemonProps) => pokemon.name);
  },
});

export default pokemonsNames;
