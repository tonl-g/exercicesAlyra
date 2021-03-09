/* En vous inspirant de l'un des exemple du cours d'aujourd'hui sur les boucles, écrire un programme qui n'affiche que les multiples de 3 et 7 entre 1 et 1000. L'opérateur % peut vous aider à trouver si un nombre est multiple d'un autre. */

for (let i = 0, j = 0; i <= 100, j <= 100; i++, j++) {
  if (i % 3 === 0) {
    console.log(`i = ${i}`)
  } else if (j % 7 === 0) 
    console.log(`j = ${j}`)
  }

  