/* Ecrivez une fonction filter qui devra effectuer la même opération que la méthode .filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter La fonction filter devra retourner un nouveau tableau dont tous les éléments passent le test implémenté dans une fonction passé en paramètre à un tableau passé en paramètre aussi à la fonction filter. */

const filter = (checkWord) => {
    let result = words.filter(word => word.length > 6)
    return result
}

let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

console.log(filter())

// 

const filter1 = (checkPokemon) => {
    let waterPokemon = pokemons.filter((pokemon) => pokemon.type === 'eau')
    return waterPokemon
}

let pokemons = [
    {
      id: 1,
      name: "Pikachu",
      type: "electrique",
    },
    {
      id: 2,
      name: "Carapuce",
      type: "eau",
    },
    {
      id: 3,
      name: "Tortank",
      type: "eau",
    },
    {
      id: 4,
      name: "Salameche",
      type: "feu",
    }]

console.log(filter1())