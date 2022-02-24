export declare interface PokemonRawList {
  name: string;
  url: string;
}

export declare interface PokemonProps {
  name: string;
  stats: Stat[];
  types: Type[];
  sprites: Sprite[];
}

declare interface Sprite {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

declare interface Stat {
  name: string;
  base_stat: number;
  effort: number;
}

export declare interface Type {
  name: Types;
}

declare enum Types {
  grass = 'Grass',
  poison = 'Poison',
}
