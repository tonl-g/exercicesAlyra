/* Ecrire une fonction isOdd qui prend un nombre en paramètre et qui devra retourner true si le nombre passé en paramètre est impair, sinon la fonction retournera false. */

const isOdd = (value) => {
    if (value % 2 !== 0) {
      return true 
    } else {
      return false
}
}

// isOdd(7)

/* Ajouter au fichier précédent une fonction isEven qui prend un nombre en paramètre et qui devra retourner true si le nombre passé en paramètre est pair, sinon la fonction retournera false.
la fonction isEven devra absolument utiliser la fonction isOdd pour effectuer sa vérification de parité. */

const isEven = (value1) => {
  if (isOdd(value1)) {
      return false 
    } else {
		  return true
    }
}

console.log(isEven(8))
