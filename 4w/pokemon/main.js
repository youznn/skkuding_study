const data = [
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

let storedindex = localStorage.getItem("pokemon");
let index = JSON.parse(storedindex); //index를 가져와서 현재 클릭한 포켓몬이 무엇인지 보여주려고 함
let pokemon = data[index - 1]; //array에서 pokemon 가져옴

document.addEventListener("DOMContentLoaded", () => {
  const imgWrapper = document.querySelector(".img-wrapper"); //imgwrapper 요소 찾아서 가져오기
  const main = document.querySelector("main");
  let img = document.createElement("img");
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`;
  let name = document.createElement("h1");
  name.innerHTML = `${pokemon.name}`;
  let tableWrapper = document.createElement("div");
  tableWrapper.className = "table-wrapper";
  let table = document.createElement("table");

  let map = new Map(Object.entries(pokemon)); //객체를 맵으로 바꿔주기

  map.forEach((value, key, map) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    td1.innerHTML = `${key}`;
    td2.innerText = `${value}`;
    table.append(tr);
    tr.append(td1, td2);
  });

  //자식요소로 추가해주기
  tableWrapper.append(table);
  imgWrapper.append(img);
  main.append(name, tableWrapper);
});
