import axios from 'axios';
import { selector } from 'recoil';
import { pokemonsListState } from '../atoms';
import { PokemonRawList } from '../models';

const pokemonsCardsSelector = selector({
  key: 'pokemonsCardsSelector',
  get: async ({ get }) => {
    const pokemonsList = get(pokemonsListState).slice(0, 18);

    const generateImgUrl = (id: string) => `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;

    const cards = Promise.all(
      pokemonsList.map(async (pokemon: PokemonRawList) => {
        const response = await axios.get(pokemon.url);
        const { name, types, id } = response.data;
        const numericId = id.toString().padStart(3, '0');
        return {
          name,
          id: `Nº${numericId}`,
          image: generateImgUrl(numericId),
          types,
        };
      }),
    );

    return cards;
  },
});

export default pokemonsCardsSelector;
