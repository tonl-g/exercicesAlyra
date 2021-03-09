/* Ecrire une fonction count qui prend comme paramètre un nombre min, un nombre max et un nombre step. L'exécution de cette fonction devra afficher sur le terminal tous les nombres de min jusqu'a max avec un intervale de step */

const MIN = 1
const MAX = 11
const STEP = 1

const counter = (MIN, MAX, STEP) => {
    return `counter = ${MIN}`
}

const count = (MIN, MAX, STEP) => {
    for (let i = MIN; i < MAX; i += STEP)
    console.log(counter(i))
}

count(MIN, MAX, STEP)

// Correction

const count1 = (MIN, MAX, STEP) => {
    for (let i = MIN; i < MAX; i += STEP)
    console.log(i)
}

count1(1, 10, 1)