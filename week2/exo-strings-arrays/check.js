/* Vérifier si dans le texte suivant le mot Javascript est présent:

JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript */

let text = `JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript`

let searchWord = text.includes('Javascript')
console.log(searchWord)

