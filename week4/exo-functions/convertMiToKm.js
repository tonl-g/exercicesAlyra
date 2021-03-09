/* Ecrire une fonction convertMiToKm qui fait la conversion d'une distance exprimée en Milles, en Kilomètres. 1 Mille est à égal à 1.60934 Kilomètres. */

const FACTOR = 1.60934 // Déclarer en constante

const convertMiToKm = (milles) => {
    let calc = milles * FACTOR
    let msg = `${milles} milles = ${calc} km`
    return msg
}

console.log(convertMiToKm(10))
