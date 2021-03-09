/* la string suivante est difficilement lisible:

let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '
Avec un programme, afficher cette phrase en réglant les problèmes d'espaces et passages à la ligne inutiles, et aussi de casse (Mettez tout en minuscule ou majuscule). */

let text =   '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

let newText = text.trim().toLowerCase()
console.log(newText)

let newText2 = text.trim().toUpperCase()
console.log(newText2)
