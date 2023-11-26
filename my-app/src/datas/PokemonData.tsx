import { create } from "zustand";

interface Pokemon {
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
}

interface PokemonStore {
  pokemons: Pokemon[];
  setPokemons: (newPokemon: Pokemon) => void;
}

const usePokemonStore = create<PokemonStore>((set) => ({
  pokemons: [],
  setPokemons: (newPokemon) =>
    set((state) => ({ pokemons: [...state.pokemons, newPokemon] })),
}));
export default usePokemonStore;
