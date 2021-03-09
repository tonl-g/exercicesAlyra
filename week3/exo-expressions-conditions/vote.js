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

let age = 18
let canVote = false
let isFrench = true
let isFranceResident = false
if (age >= 18 && isFrench && !isFranceResident) {
  canVote = true
} else {
  canVote = false
}
if (canVote) {
  console.log('You can vote')
} else {
  console.log('You can not vote')
}