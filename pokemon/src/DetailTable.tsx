import { useQuery, gql } from "@apollo/client";

const GET_POKEMONS = gql`
  query GetPokemons {
    pokemondata: pokemon_v2_pokemon(limit: 10) {
      index: id
      name
      height
      weight
      base_experience
      abilities: pokemon_v2_pokemonabilities {
        ability: pokemon_v2_ability {
          name
        }
      }
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          name
        }
      }
      hp: pokemon_v2_pokemonstats(where: { stat_id: { _eq: 1 } }) {
        base_stat
      }
      attack: pokemon_v2_pokemonstats(where: { stat_id: { _eq: 2 } }) {
        base_stat
      }
      defense: pokemon_v2_pokemonstats(where: { stat_id: { _eq: 3 } }) {
        base_stat
      }
      special_attack: pokemon_v2_pokemonstats(where: { stat_id: { _eq: 4 } }) {
        base_stat
      }
      special_defense: pokemon_v2_pokemonstats(where: { stat_id: { _eq: 5 } }) {
        base_stat
      }
      speed: pokemon_v2_pokemonstats(where: { stat_id: { _eq: 6 } }) {
        base_stat
      }
    }
  }
`;

function DetailTable({ index }: any) {
  const { loading, error, data } = useQuery(GET_POKEMONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const pokemon = data && data.pokemondata && data.pokemondata[index];

  const pokemonstats = [
    { label: "Height", value: `${pokemon.height} dm` },
    { label: "Weight", value: `${pokemon.weight} hg` },
    {
      label: "Types",
      value: pokemon.types.map((type: any) => type.type.name).join(", "),
    },
    { label: "Base Experience", value: pokemon.base_experience },
    {
      label: "Abilities",
      value: pokemon.abilities
        .map((ability: any) => ability.ability.name)
        .join(", "),
    },
    { label: "HP", value: pokemon.hp[0].base_stat },
    { label: "Attack", value: pokemon.attack[0].base_stat },
    { label: "Defense", value: pokemon.defense[0].base_stat },
    { label: "Special-attack", value: pokemon.special_attack[0].base_stat },
    { label: "Special-defense", value: pokemon.special_defense[0].base_stat },
    { label: "Speed", value: pokemon.speed[0].base_stat },
  ];

  return (
    <div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          pokemon.index + 1
        }.png`}
        alt={pokemon.name}
      />
      <h1 className="text-3xl font-medium">{pokemon.name}</h1>
      <div className="border border-solid border-yellow-400/[0.4] rounded-lg p-8">
        <table>
          <tbody>
            {pokemonstats.map((item, index) => (
              <tr
                key={index}
                className="border-b border-solid border-yellow-400/[0.4]"
              >
                <td className="p-2 font-bold text-white">{item.label}</td>
                <td className="p-2 text-right">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DetailTable;
