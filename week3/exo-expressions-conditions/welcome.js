/* En fonction du prénom (firstName) et du genre de l'utilisateur(gender) lui afficher le message correspondant. Vous devrez utiliser un ternary operator pour cela.
La variable firstName contiendra le prénom de l'utilisateur.
la variable gender contiendra le genre de l'utilisateur avec comme valeur male ou female.
Vous devrez afficher par exemple pour un homme prénommé Bob:

Bonjour Bob, vous êtes entré sur le chan
Vous devrez afficher pour une femme prénommée Alice:

Bonjour Alice, vous êtes entrée sur le chan */

/* et firstName = "Alice"
let gender = "female"
if ((firstName === "Bob" && gender === "male") || (firstName === "Alice" && gender === "female")) {
    console.log(`Bonjour ${firstName}, vous êtes entrée sur le chan!`)
} else {
    console.log(`Vous n'avez pas les droits d'accés au Chan!`)
} */

// ternary operator
let firstName = "Bob"
let gender = "male"
console.log(`Bonjour ${firstName}, vous êtes entré${gender === true ? 'e' : ''} sur le chan!`) 
