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
