/* Ecrire un script boolean.js qui affichera le résultat des expressions suivantes qui ont été assignées à des variables.
Evaluer d'abord mentalement le résultat puis vérifier cela avec votre script. 
Ecrire un script boolean.js qui affichera le résultat des expressions suivantes qui ont été assignées à des variables.
Vous devrez afficher les résultats sur la console avec un console.log, par exemple:
console.log(`res1 = ${res1}`)
Dans le doute sur la priorité des différents opérateurs vous pouvez vous appuyer sur cette table.
Plus le chiffre de la 1ere colonne est élevé plus l'opérateur est prioritaire sur ceux d'en dessous. */

let res1 = (true && false) || (false && true)
let res2 = 10 > 11 && 11 > 10
let res3 = (true || false) && true
let res4 = (!true && !false) || (!false && !false)
let res5 = 'Hello' === 'Hello' && 'World' == 'Word'
let res6 = (!(20 >= 20) && 7 === 7) || true
let res7 = '1' === 1 && '2' == 2 && '3' === 3
let res8 = !res7
let res9 = !res8
let res10 =
  (res1 && res2) || (res3 && res4) || (res5 && res6) || (res7 && res8 && res9)

console.log(`res1 = ${res1}`)
console.log(`res2 = ${res2}`)
console.log(`res3 = ${res3}`)
console.log(`res4 = ${res4}`)
console.log(`res5 = ${res5}`)
console.log(`res6 = ${res6}`)
console.log(`res7 = ${res7}`)
console.log(`res8 = ${res8}`)
console.log(`res9 = ${res9}`)
console.log(`res10 = ${res10}`)






