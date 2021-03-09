/* Dans la correction de cet exercice: https://github.com/AbsoluteVirtueXI/blockchain-courses/blob/master/exercices/programming/corrections-numbers-and-strings.md/countVowel.js Nous avons utilisé une suite de if / else if pour compter les différentes voyelles d'un texte.
Réécrivez le même exercice mais avec un switch. */
// https://stackoverflow.com/questions/62874483/i-want-to-find-vowel-occurences-in-javascript-using-switch-statement

const findOccurrences = () => {
let text =
  "Je suis le ténébreux, - le veuf, - l'inconsolé,\n\
Le prince d'Aquitaine à la tour abolie :\n\
Ma seule étoile est morte, - et mon luth constellé\n\
Porte le soleil noir de la Mélancolie.\n\
\n\
Dans la nuit du tombeau, toi qui m'as consolé,\n\
Rends-moi le Pausilippe et la mer d'Italie,\n\
La fleur qui plaisait tant à mon cœur désolé,\n\
Et la treille où le pampre à la rose s'allie.\n\
\n\
Suis-je Amour ou Phébus ? ... Lusignan ou Biron ?\n\
Mon front est rouge encor du baiser de la reine ;\n\
J'ai rêvé dans la grotte où nage la sirène...\n\
\n\
Et j'ai deux fois vainqueur traversé l'Achéron ;\n\
Modulant tour à tour sur la lyre d'Orphée\n\
Les soupirs de la sainte et les cris de la fée."

let count = 0
let haveSeenVowel = false

  for (const i of text) {
    switch (i) {
      case 'a':
      case 'A':
      case 'à':
      case 'e':
      case 'E':
      case 'è':
      case 'é':
      case 'ê':
      case 'i':
      case 'I':
      case 'o':
      case 'O':
      case 'u':
      case 'U':
      case 'y':
      case 'Y':
        {
          if (haveSeenVowel) {
            count++;
            haveSeenVowel = false;
          } else {
            haveSeenVowel = true;
          }
          break
        }
      default:
        haveSeenVowel = false
    }
  }

  return count
}

console.log(findOccurrences())

