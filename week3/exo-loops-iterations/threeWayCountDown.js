/* Ecrire avec 3 boucles différentes, un décompte de 101 à 1 en décomptant de 2 en 2: L'affichage attendu:

101
99
97
95
....
5
3
1 */

// Boucle 1 -2
let counter1 = 101
while (counter1 > 0) {
  console.log(counter1)
  counter1 -= 2
}

// Boucle 2 -2
let counter2 = 101
do {
  console.log(counter2)
  counter2 -= 2
} while (counter2 > 0) 

// Boucle 3 -2
for (let counter3 = 101; counter3 > 0; counter3 -= 2) {
    console.log(counter3)
  }



