/* Ecrivez un programme qui affiche la somme de tous les nombres présents dans ce tableau (qui contient des tableaux)

let tab = [
  [1, 2, 3],
  [4, -5, 7],
  [-3, -6],
  [10, -13],
] */

let tab = [
    [1, 2, 3],
    [4, -5, 7],
    [-3, -6],
    [10, -13],
  ]

for (let i = 0; i < tab.length; ++i) {
    console.log(`Array ${i + 1}:`)
    for (let j = 0; j < tab[i].length; ++j) {
      console.log(`\t${tab[i][j]}`)
    }
  }

  let tab1 = [
    [1, 2, 3],
    [4, -5, 7],
    [-3, -6],
    [10, -13],
  ]

  let sum = 0
for (let i = 0; i < tab1.length; ++i) {
    for (let j = 0; j < tab1[i].length; ++j) {
      sum += tab1[i][j]
    }
  }

  console.log(`sum = ${sum}`)