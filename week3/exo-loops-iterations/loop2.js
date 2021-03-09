/* Avec une boucle do-while afficher les éléments du tableau suivant, ligne par ligne:

let tab = ['a', 'b', 'c', 'd', 'e'] */

let tab = ['a', 'b', 'c', 'd', 'e']

let i = 0;
do {
  i = i += 1
  console.log(tab[i]);
} while (i < tab.length); 

