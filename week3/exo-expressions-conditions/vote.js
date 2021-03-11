/* Réécrire le programme suivant avec un ou deux ternary operator:

let age = 17
let canVote = false
if (age >= 18) {
  canVote = true
} else {
  canVote = false
}
if (canVote) {
  console.log('You can vote')
} else {
  console.log('You can not vote')
} */

let age = 25
let canVote = age >= 18 ? true : false
console.log(`${canVote ? 'You can vote' : 'You can not vote'}`)