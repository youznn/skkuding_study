interface PokemonData {
  name: string;
  height: string;
  weight: string;
  types: string[];
  "base-Experience": string;
  abilities: string[];
  hp: string;
  attack: string;
  defense: string;
  "special-attack": string;
  "special-defense": string;
  speed: string;
}

let storedpokemon = localStorage.getItem("pokemon"); //Json 문자열 형태로 저장됨
let pokemon: PokemonData | null = storedpokemon
  ? JSON.parse(storedpokemon)
  : null; //객체로 변환
console.log(pokemon); //객체

let storedindex = localStorage.getItem("index");

document.addEventListener("DOMContentLoaded", () => {
  const imgWrapper = document.querySelector(".img-wrapper"); //imgwrapper 요소 찾아서 가져오기
  const main = document.querySelector("main");
  let img = document.createElement("img");
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${storedindex}.png`; //인덱스 없이 처리 어떻게?
  let name = document.createElement("h1");
  pokemon ? (name.innerHTML = `${pokemon.name}`) : null;
  let tableWrapper = document.createElement("div");
  tableWrapper.className = "table-wrapper";
  let table = document.createElement("table");

  let map = new Map<string, string>();
  if (pokemon) {
    Object.entries(pokemon).forEach(([key, value]) => {
      map.set(key, value);
    });
  } //객체를 맵으로 바꿔주기

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
  imgWrapper ? imgWrapper.append(img) : null;
  main ? main.append(name, tableWrapper) : null;

  //title 변경까지
  pokemon ? (document.title = `${pokemon.name}`) : null;
});
