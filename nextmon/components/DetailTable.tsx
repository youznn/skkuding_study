import Image from "next/image";
import { useRouter } from "next/navigation";

const PokeData = [
  {
    name: "Bulbasaur",
    height: "7",
    weight: "69",
    types: ["grass", "poison"],
    "base-Experience": "64",
    abilities: ["overgrow", "chlorophyll"],
    hp: "45",
    attack: "49",
    defense: "49",
    "special-attack": "65",
    "special-defense": "65",
    speed: "45",
  },
  {
    name: "Ivysaur",
    height: "10",
    weight: "130",
    types: ["grass", "poison"],
    "base-Experience": "142",
    abilities: ["overgrow", "chlorophyll"],
    hp: "60",
    attack: "62",
    defense: "63",
    "special-attack": "80",
    "special-defense": "80",
    speed: "60",
  },
  {
    name: "Venusaur",
    height: "20",
    weight: "1000",
    types: ["grass", "poison"],
    "base-Experience": "236",
    abilities: ["overgrow", "chlorophyll"],
    hp: "80",
    attack: "82",
    defense: "83",
    "special-attack": "100",
    "special-defense": "100",
    speed: "80",
  },
  {
    name: "Charmander",
    height: "6",
    weight: "85",
    types: ["fire"],
    "base-Experience": "62",
    abilities: ["blaze", "solar-power"],
    hp: "39",
    attack: "52",
    defense: "43",
    "special-attack": "60",
    "special-defense": "50",
    speed: "65",
  },
  {
    name: "Charmeleon",
    height: "11",
    weight: "190",
    types: ["fire"],
    "base-Experience": "142",
    abilities: ["blaze", "solar-power"],
    hp: "58",
    attack: "64",
    defense: "58",
    "special-attack": "80",
    "special-defense": "65",
    speed: "80",
  },
  {
    name: "Charizard",
    height: "17",
    weight: "905",
    types: ["fire", "flying"],
    "base-Experience": "240",
    abilities: ["blaze", "solar-power"],
    hp: "78",
    attack: "84",
    defense: "78",
    "special-attack": "109",
    "special-defense": "85",
    speed: "100",
  },
  {
    name: "Squirtle",
    height: "5",
    weight: "90",
    types: ["water"],
    "base-Experience": "63",
    abilities: ["torrent", "rain-dish"],
    hp: "44",
    attack: "48",
    defense: "65",
    "special-attack": "50",
    "special-defense": "64",
    speed: "43",
  },
  {
    name: "Wartortle",
    height: "10",
    weight: "225",
    types: ["water"],
    "base-Experience": "142",
    abilities: ["torrent", "rain-dish"],
    hp: "59",
    attack: "63",
    defense: "80",
    "special-attack": "65",
    "special-defense": "80",
    speed: "58",
  },
  {
    name: "Blastoise",
    height: "16",
    weight: "855",
    types: ["water"],
    "base-Experience": "239",
    abilities: ["torrent", "rain-dish"],
    hp: "79",
    attack: "83",
    defense: "100",
    "special-attack": "85",
    "special-defense": "105",
    speed: "78",
  },
  {
    name: "Caterpie",
    height: "3",
    weight: "29",
    types: ["bug"],
    "base-Experience": "39",
    abilities: ["shield-dust", "run-away"],
    hp: "45",
    attack: "30",
    defense: "35",
    "special-attack": "20",
    "special-defense": "20",
    speed: "45",
  },
];

export default function DetailTable({ index }: { index: string | string[] }) {
  const router = useRouter();
  const pokemonIndex = Number(index);
  const pokemon = PokeData[pokemonIndex];

  const pokemonstats = [
    { label: "Height", value: `${pokemon.height} dm` },
    { label: "Weight", value: `${pokemon.weight} hg` },
    { label: "Types", value: pokemon.types.join(", ") },
    { label: "Base Experience", value: pokemon["base-Experience"] },
    { label: "Abilities", value: pokemon.abilities.join(", ") },
    { label: "HP", value: pokemon.hp },
    { label: "Attack", value: pokemon.attack },
    { label: "Defense", value: pokemon.defense },
    { label: "Special-attack", value: pokemon["special-attack"] },
    { label: "Special-defense", value: pokemon["special-defense"] },
    { label: "Speed", value: pokemon.speed },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4">
      <div className="border border-solid border-yellow-400 rounded-full overflow-hidden">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            pokemonIndex + 1
          }.png`}
          alt={pokemon.name}
          width={400}
          height={400}
        />
      </div>

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
