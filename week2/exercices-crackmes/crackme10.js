// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme

let password = 'e'

const crackme10 = (password) => {
  if (
    password
      .trim() // permet de retirer les blancs en début et fin de chaîne
      .toLowerCase() // retourne la chaîne de caractères courante en minuscules
      .split('') // permet de diviser une chaîne de caractères à partir d'un séparateur pour fournir un tableau de sous-chaînes
      .filter((elem) => ['a', 'e', 'i', 'o', 'u', 'y'].includes(elem))
      .map((elem) => elem.charCodeAt()) // représente un dictionnaire, autrement dit une carte de clés/valeurs
      .reduce((a, b) => { // applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite)
        return a + b
      }, 0) %
      2 !==
    0
  ) {
    console.log('OK')
  } else {
    console.log('BAD')
  }
}

crackme10(password)