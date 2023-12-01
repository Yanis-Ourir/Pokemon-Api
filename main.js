const generateButton = document.querySelector('#random-pokemon');
const catchButton = document.querySelector('#catch-pokemon');
const card = document.querySelector('.card-pokemon');
const myPokemon = [];
const catchedPokemon = document.querySelector('#catched-pokemon');
let randomPokemonNumber = 0;

function getRandomInt() { // la fonction pour créer un nombre aléatoire
    return Math.floor(Math.random() * 1000);
}

async function getPokemon() { // On récupère un pokémon avec cette fonction
    randomPokemonNumber = getRandomInt(); // on randomise un nombre entre 1 et 1000 grâce à la fonction randomInt
    const response = await fetch(`https://tyradex.vercel.app/api/v1/pokemon/${randomPokemonNumber}`); // le nombre appelle un pokémon aléatoire
    const pokemon = await response.json();
    return pokemon;
}

async function displayPokemon() {
    const pokemonGenerated = await getPokemon(); // on récupère le pokémon de la fonction getPokemon();
    console.log(pokemonGenerated.name.fr); 
    card.innerHTML = `
          <div class="card" style="width: 24rem;">
                <img src="${pokemonGenerated.sprites.regular}" class="card-img-top" alt="...">
                     <div class="card-body">
                         <h5 class="card-title">${pokemonGenerated.name.fr}</h5>
                                 <div class="d-flex justify-content-between">
                                     <h5 class="">type : ${pokemonGenerated.types[0].name}</h5>
                                         <img src="${pokemonGenerated.types[0].image}" alt="pokemon-type" style='width: 30px;'> 
                                 </div>
                             <p class="card-text">HP : ${pokemonGenerated.stats.hp}</p>
                             <p class="card-text">Atk : ${pokemonGenerated.stats.atk}</p>
                             <p class="card-text">Def : ${pokemonGenerated.stats.def}</p>
                             <p class="card-text">Sp.Atk : ${pokemonGenerated.stats.spe_atk}</p>
                             <p class="card-text">Sp.Def : ${pokemonGenerated.stats.spe_def}</p>
                             <p class="card-text">Sp.Def : ${pokemonGenerated.stats.vit}</p>
                      </div>
             </div>
         `;
    return pokemonGenerated;
}




generateButton.addEventListener('click', () => {
    displayPokemon();
});




























