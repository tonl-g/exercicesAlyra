/* Ecrivez une fonction biggest qui retourne le plus grand élément d'une liste de nombre.

biggest([99, 100, 101, 1]) // returns 101 */

const biggest = (arrayNb) => {
    let maxNb = Math.max(...arrayNb)
    console.log(maxNb)
}

biggest([99, 100, 101, 1])

/* Ajouter au fichier précédent une fonction sortAscend qui prend comme paramètre une liste de nombres et retourne une nouvelle liste dont les nombres sont classés par ordre croissant.

sortAscend([99, 100, 101, 1]) // returns [1, 99, 100, 101] */

const sortAscend = (newOrdList) => {
    let ordList = newOrdList.sort(function(a, b){return a - b})
    console.log(ordList)
}

sortAscend([99, 100, 101, 1])

