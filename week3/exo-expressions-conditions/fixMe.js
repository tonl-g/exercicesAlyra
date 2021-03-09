/* Ce programme est incorrect:

let list = "'Alice', 'Bob', 'Charlie', 'Craig', 'Eva'"
for (let j = 0; j <= list.length; ++i) {
  list[i] = list[i].toLowerCase()
  switch (list[i]) {
    Case ALICE:
      consol.log('Alice want to exchange with Bob')
    Case BOB:
      console.log('Bob want to exchange with Alice')
    Case CHARLIE:
      console.log('Charlie is a generic third participant')
    Case CRAIG:
      console.log('Craig is a password cracker')
    Case EVE:
      console.log('Eve is an eavesdropper')
  }
}
Vous devez corriger le code précédent et obtenir l'affichage suivant:

Alice want to exchange with Bob
Bob want to exchange with Alice
Charlie is a generic third participant
Craig is a password cracker
Eve is an eavesdropper */

let list = ['Alice', 'Bob', 'Charlie', 'Craig', 'Eva']
for (let j = 0; j < list.length; ++j) {
  switch (list[j]) {
    case (list[0]) :
      console.log('Alice want to exchange with Bob')
      break
    case (list[1]):
      console.log('Bob want to exchange with Alice')
      break
    case (list[2]):
      console.log('Charlie is a generic third participant')
      break
    case (list[3]):
      console.log('Craig is a password cracker')
      break
    case (list[4]):
      console.log('Eve is an eavesdropper')
      break
  }
}


