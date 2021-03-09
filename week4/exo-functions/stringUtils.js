/* Ecrire une fonction reverseStr qui prend en paramètre une string et qui retourne cette string inversé. Si le paramètre passé est 'Hello!' la fonction devra retourné '!olleH' */

const reverseStr = (str) => {
    if (str === 'Hello!') {
        console.log(str.split('').reverse().join()) 
    } else {
        console.log("Écrire 'Hello!'")
    }
}

reverseStr('Hello!')

/* Ajouter au fichier précédent une fonction isPalindrome qui prend une string en paramètre et qui retourne true si la string est un palindrome, sinon la fonction devra retourner false. Vous devrez utiliser la fonction reverseStr pour effectuer */

const isPalindrome = (str) => {
    if (str === str.split('').reverse().join('')) { 
        console.log(`${str} est un palindrome!`)
    } else {
        console.log(`${str} n'est pas un palindrome!`)
    }
}

isPalindrome('kayak')

