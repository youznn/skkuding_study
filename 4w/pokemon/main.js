var storedpokemon = localStorage.getItem("pokemon"); //Json 문자열 형태로 저장됨
var pokemon = storedpokemon
    ? JSON.parse(storedpokemon)
    : null; //객체로 변환
console.log(pokemon); //객체
var storedindex = localStorage.getItem("index");
document.addEventListener("DOMContentLoaded", function () {
    var imgWrapper = document.querySelector(".img-wrapper"); //imgwrapper 요소 찾아서 가져오기
    var main = document.querySelector("main");
    var img = document.createElement("img");
    img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(storedindex, ".png"); //인덱스 없이 처리 어떻게?
    var name = document.createElement("h1");
    pokemon ? (name.innerHTML = "".concat(pokemon.name)) : null;
    var tableWrapper = document.createElement("div");
    tableWrapper.className = "table-wrapper";
    var table = document.createElement("table");
    var map = new Map();
    if (pokemon) {
        Object.entries(pokemon).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            map.set(key, value);
        });
    } //객체를 맵으로 바꿔주기
    map.forEach(function (value, key, map) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        td1.innerHTML = "".concat(key);
        td2.innerText = "".concat(value);
        table.append(tr);
        tr.append(td1, td2);
    });
    //자식요소로 추가해주기
    tableWrapper.append(table);
    imgWrapper ? imgWrapper.append(img) : null;
    main ? main.append(name, tableWrapper) : null;
    //title 변경까지
    pokemon ? (document.title = "".concat(pokemon.name)) : null;
});
