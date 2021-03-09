/* Ecrire une fonction typeOf qui prend comme paramètre une variable, et qui retourne une string qui sera le nom du type de cette variable passée en paramètre. Vous devrez utiliser l'opérateur typeof pour cela */

const msg = (variable) => {
    return `Le typeOf est ${variable}`
}

const typeOf = (variable) => {
    console.log(msg(typeof variable))
}

const variable = 'Ton'

typeOf(variable)

// Correction

const typeOf1 = (variable) => {
    console.log(typeof variable)
}

typeOf1('Ton')

