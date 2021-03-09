/* Ecrivez un programme qui affichera un message contenant tous les vêtements et accessoires que vous devrez porter en fonction des données méteo. Ci dessus le début d'un template:

let isRainy = true
let temperature = 10
let clothes = ''

if (isRainy) {
  clothes += 'umbrella, ' // concatenation de string
}

if (temperature < 15) {
  clothes += 'coat, '
} else if (temperature >= 15 && temperature <= 20) {
  clothes += 'sweater, '
} else {
  clothes += 't-shirt, '
}
console.log(`Je vous recommande de porter: ${clothes}`)
Soyez imaginatif et cohérent. Si l'on veut bien faire, cet exercice peut être assez difficile, par exemple un t-shirt doit être toujours porté, même sous un pull ou un manteau. */

let isRainy = false
let temperature = 40
let clothes = 't-shirt, '

if (isRainy) {
  clothes += 'umbrella, ' // concatenation de string
}

if (temperature < 0) {
  clothes += 'boot, coat, sweater, '
}  else if (temperature >= 0 && temperature <= 15) {
  clothes += 'coat, sweater, '
} else if (temperature >= 15 && temperature <= 25) {
  clothes += 'sweater, '
} else if (temperature > 35) {
  clothes += 'sunglasses'	
} else {
  clothes += ''
}

console.log(`Je vous recommande de porter: ${clothes}`)



