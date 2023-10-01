var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var data = [
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
var pokemonMap = new Map(); //맵 만들기
data.forEach(function (pokemon) { return pokemonMap.set(pokemon.name, __assign({}, pokemon)); }); //포켓몬 맵 만들기
var container = document.querySelector(".container"); //container 요소 찾아서 가져오기
var index = 1;
pokemonMap.forEach(function (value, key, map) {
    var currentindex = index;
    var item = document.createElement("div"); //item 블럭 만들기
    item.className = "item";
    item.onclick = function () {
        localStorage.setItem("pokemon", JSON.stringify(data[currentindex - 1])); //currentindex 대신에 객체 전달하도록 바꿈
        localStorage.setItem("index", currentindex.toString()); //img src 링크 위해 index도 전달
        window.location.href = "./pokemon/"; //a태그 대신에 onclick 이벤트
    };
    var imgWrapper = document.createElement("div");
    var pokeimg = document.createElement("img");
    pokeimg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(index, ".png");
    pokeimg.alt = "".concat(key);
    var infowrapper = document.createElement("div");
    var name = document.createElement("h2");
    var height = document.createElement("p");
    var weight = document.createElement("p");
    var types = document.createElement("p");
    name.innerHTML = "".concat(key);
    height.innerHTML = "height: ".concat(value.height, "dm");
    weight.innerHTML = "weight: ".concat(value.weight, "hg");
    types.innerHTML = "types: ".concat(value.types);
    item.append(imgWrapper, infowrapper);
    imgWrapper.append(pokeimg);
    infowrapper.append(name, height, weight, types);
    container.append(item);
    index++;
});
