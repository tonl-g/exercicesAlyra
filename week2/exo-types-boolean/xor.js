/* En vous basant sur vos explications de l'exercice précédent, ou d'internet, écrivez un programme qui simule une opération xor.
indice: xor peut être obtenu avec une combinaison d'opérateurs logiques &&, || et !. La réponse peut être obtenue sur internet, essayez de comprendre!!! */

let a = true
let b = true

if ((a || b) && !(a && b)) {
	console.log('V1 = TRUE')
} else {
	console.log('V1 = FALSE')
}

if ((a && !b) || (!a && b )) {
	console.log('V2 = TRUE')
} else {
	console.log('V1 = FALSE')
}