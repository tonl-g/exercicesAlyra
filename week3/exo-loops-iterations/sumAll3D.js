/* Ecrivez un programme qui affiche la somme de tous les nombres présents dans ce tableau (qui contient des tableaux)

let tab = [
  [
    [1, 7, 3],
    [11, 17, 7],
    [-3, -5],
    [5, 13],
  ],
  [
    [2, 4, 6, 8, 10],
    [1, 3, 5],
  ],
  [[0]],
  [[0], [1], [2], [1]],
] */

let tab = [
    [
      [1, 7, 3],
      [11, 17, 7],
      [-3, -5],
      [5, 13],
    ],
    [
      [2, 4, 6, 8, 10],
      [1, 3, 5],
    ],
    [[0]],
    [[0], [1], [2], [1]],
  ]

  for (let i = 0; i < tab.length; ++i) {
    console.log(`Array ${i + 1}:`)
    for (let j = 0; j < tab[i].length; ++j) {
      console.log(`\t${tab[i][j]}`)
    }
  }

  let tab1 = [
    [
      [1, 7, 3],
      [11, 17, 7],
      [-3, -5],
      [5, 13],
    ],
    [
      [2, 4, 6, 8, 10],
      [1, 3, 5],
    ],
    [[0]],
    [[0], [1], [2], [1]],
  ]

  let sum = 0
  for (let i = 0; i < tab1.length; ++i) {
    for (let j = 0; j < tab1[i].length; ++j)
    for (let k = 0; k < tab1[i][j].length; ++k)
    sum += tab1[i][j][k]
  }

console.log(`sum = ${sum}`)