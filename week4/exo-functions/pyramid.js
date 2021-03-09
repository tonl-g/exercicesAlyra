/* En vous inspirant de la fonction showStars vue en cours, Ecrire une fonction pyramid qui prend 3 paramètres:

le nombre d'éléments qui sera la base de la pyramide
un boolean pour vérifier si la pyramide sera générée à l'envers ou à l'endroit
une string (un caractère) qui sera le motif à afficher contrairement à l'exemple du cours qui affiche par défaut le caractère *. */

const pyramyd = (nbBase, reverse, str) => {
  if (!reverse) {
      for (let i = 1; i <= nbBase; ++i)
      console.log(str.repeat(i))
  } else {
      for (let i = nbBase; i >= 1; --i)
      console.log(str.repeat(i))
  }
}

let nbBase = 10
let reverse = true
let str = '*'


pyramyd(nbBase, reverse, str)

//

const pyramyd1 = (nbBase, reverse, str) => {
  if (!reverse) {
      for (let i = 1; i <= nbBase; ++i)
      console.log(str.repeat(i))
  } else {
      for (let i = nbBase; i >= 1; --i)
      console.log(str.repeat(i))
  }
}

pyramyd1(5, true, '#')