// let MyfavoriteHero = 'Hulk'
// let x = 50
// let h = 5
// let y = 10
// let z = x + y
// console.log(h)
// console.log(MyfavoriteHero)
// console.log(z)

// const character = { name: 'Jack Sparrow', age: 10 }
// character.age = 25
// console.log(character)

// firstName = 'Jon'
// lastName = 'Snow'
// age = 24
// console.log(
//   `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos`
// )
//!1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de ambos juguetes.

// const toy1 = { name: 'Buss myYear', price: 19 }
// const toy2 = { name: 'Rallo mcKing', price: 29 }
// const totalPrice = toy1.price + toy2.price
// console.log(`el precio total es ${totalPrice}`)

// //!1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad basePrice más el valor de la variable globalBasePrice.

// let globalBasePrice = 10000
// const car1 = { name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 }
// const car2 = { name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000 }

// globalBasePrice = 25000
// car1.finalPrice = car1.basePrice + globalBasePrice
// car2.finalPrice = car2.basePrice + globalBasePrice

// console.log(car1.finalPrice) //? 75000
// console.log(car2.finalPrice) //? 95000

// console.log(car1)
// console.log(car2)

//!Consigue el valor "HULK" del array de avengers y muestralo por consola

//! Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array

// const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
// rickAndMortyCharacters.push('Morty', 'Summer')
// console.log(rickAndMortyCharacters)
// console.log(rickAndMortyCharacters[4])

// const rickAndMortyCharacters = [
//   'Rick',
//   'Beth',
//   'Jerry',
//   'Morty',
//   'Summer',
//   'Lapiz Lopez'
// ]

// rickAndMortyCharacters.pop()
// console.log(rickAndMortyCharacters)
// rickAndMortyCharacters.splice(1, 1)
// console.log(rickAndMortyCharacters)

const number1 = 10
const number2 = 20
const number3 = 2
// ejemplo if(number1 === 10){
// console.log('number1 es estrictamente igual a 10')

// if (number2 / number1) {
//   console.log('number2 dividido entre number1 es igual a 2')
// }

// if (number1 !== number2) {
//   console.log('number1 es estrictamente distinto a number2')
// }

// if (number3 != number1) {
//   console.log('number3 es distinto number1')
// }
// if (number3 * 5 === number1) {
//   console.log('number3 por 5 es igual a number1')
//
// {
//   if (number3 * 5 && number1 * 2 == number2) {
//     console.log(
//       'number3 por 5 es igual a number1 Y number1 por 2 es igual a number2'
//     )
//   }
//   if (number2 / 2 === number1 || number1 / 5 === number3) {
//     console.log(
//       'number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3'
//     )
//   }
// }

// for (let i = 0; i <= 9; i++) {
//   console.log(i)
// }

// for (let i = 0; i <= 9; i++) {
//   if (i % 2 === 0)
//   console.log(i)
// }

// for (let i = 0; i <= 10; i++) {
//   if (i === 10) {
//     console.log(`Dormido!`)
//   } else {
//     console.log(`Intentando dormir`)
//   }
// }

//!Completa la función que tomando dos números como argumento devuelva el más alto.

// function sum(numberOne, numberTwo) {
//   //? return numberOne > numberTwo ? number1 : number2 (forma corta)
//   if (numberOne > numberTwo) {
//     return numberOne
//   } else {
//     return numberTwo
//   }
// }
// console.log(sum(9, 4))

// const avengers = [
//   'Hulk',
//   'Thor',
//   'IronMan',
//   'Captain A.',
//   'Spiderman',
//   'Captain M.'
// ]

// function findLongestWord(param) {
//   let longestWord = ''

//   for (let i = 0; i < param.length; i++) {
//     if (param[i].length > longestWord.length) {
//       longestWord = param[i]
//     }
//   }

//   return longestWord
// }
// console.log(findLongestWord(avengers))

// const getName = () => {
//   console.log('Devolviendo nombre')
//   return 'Carlos'
// }
// const name = getName()
// console.log(name)

// const getSurname = () => 'Martín'

// const surname = getSurname()

// console.log(surname)

const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumNumbers(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}
console.log(sumNumbers(numbers))
