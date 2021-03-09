/* Ecrivez un programme qui décidera si vous devez vendre, acheter du Bitcoin ou ne rien faire en fonction d'un prix. */

let priceBtc = 25.000
if (priceBtc >= 50.000) {
  console.log('Vous devez vendre du BTC!')
} else if (priceBtc <= 10.000) {
  console.log('Vous devez acheter du BTC!')
} else {
	console.log('Vous devez attendre que le cours du BTC monte ou descende!')
}
