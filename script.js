var image = document.getElementById("image");
var nom = document.getElementById("nom");
var type = document.getElementById("type");

var types = {
    "fire": "feu",
    "water": "eau",
    "flying": "vol",
    "psychic": "psy",
    "poison": "poison",
    "electric": "electrik",
    "grass": "plante",
    "rock": "roche",
    "dark": "tenebres",
    "ghost": "spectre",
    "fairy": "fee",
    "steel": "acier",
    "fighting": "combat",
    "ground": "sol",
    "bug": "insecte",
    "ice": "glace",
    "normal": "normal",
    "dragon": "dragon"
}


setInterval(function() {

    var x = Math.floor(Math.random() * (899 - 1) + 1);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
                var poke = JSON.parse(this.responseText);
				console.log(poke)
				nom.innerHTML = poke.name.toUpperCase();
				image.src = poke.sprites.front_default
				if (poke.types.length == 2){
					type.innerHTML = get_image(6,types[poke.types[0].type.name])+get_image(6,types[poke.types[1].type.name]);
				}
				else{
					type.innerHTML = get_image(12,types[poke.types[0].type.name]);
				}
        }
    };
    xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon-form/${x}/`, true);
    xhttp.send();


}, 10000);

function get_image(col_largeur,type){
	return `<div class="col-${col_largeur}"><img src="https://www.pokebip.com/pokedex-images/types/${type}.png"></div>`
}
