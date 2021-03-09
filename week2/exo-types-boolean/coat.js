/* Améliorer l'exemple du cours:

// Programme qui va m'aider à décider si je dois mettre mon manteau
// ou pas en fonction d'une méteo pluvieuse ou venteuse
let isRainy = true
let isWindy = false

if (isRainy || isWindy) {
  console.log('Mettez votre manteau')
} else {
  console.log('Nous n avez pas besoin de manteau today')
}
Vous devrez aussi prendre en compte la température pour décider si on doit mettre un manteau ou pas. */

let isRainy = false
let isWindy = false
let temperature = 15

if (isRainy || isWindy || temperature < 20) {
  console.log('Mettez votre manteau')
} else {
  console.log('Nous n avez pas besoin de manteau today')
}