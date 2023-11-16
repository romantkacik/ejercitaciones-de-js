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

// const number1 = 10
// const number2 = 20
// const number3 = 2
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

//! Ejercicio 9

// const getName = () => {
//   console.log('Devolviendo nombre')
//   return 'Carlos'
// }
// const name = getName()
// console.log(name)

// const getSurname = () => 'Martín'

// const surname = getSurname()

// console.log(surname)

//! Ejercicio 10

// const numbers = [1, 2, 3, 5, 45, 37, 58]

// function sumNumbers(arr) {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//   }
//   return sum
// }
// console.log(sumNumbers(numbers))

//! Ejercicio 11

// const numbers = [12, 21, 38, 5, 45, 37, 6]

// function average(param) {
//   let sum = 0
//   for (let i = 0; i < param.length; i++) {
//     sum += param[i]
//   }
//   let avg = sum / param.length
//   return avg
// }

// console.log(average(numbers))

//! Ejercicio 12

// const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']

// function averageWord(param) {
//   let sum = 0

//   for (let i = 0; i < param.length; i++) {
//     if (typeof param[i] === 'number') {
//       sum += param[i]
//     } else if (typeof param[i] === 'string') {
//       sum += param[i].length
//     }
//   }
//   return sum / param.length
// }

// console.log(averageWord(mixedElements))

//! Ejercicio 13 : Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

// const duplicates = [
//   'sushi',
//   'pizza',
//   'burger',
//   'potatoe',
//   'pasta',
//   'ice-cream',
//   'pizza',
//   'chicken',
//   'onion rings',
//   'pasta',
//   'soda'
// ]

// function removeDuplicates(param) {
//   let uniqueElements = []

//   for (let i = 0; i < param.length; i++) {
//     if (uniqueElements.indexOf(param[i]) === -1) {
//       uniqueElements.push(param[i])
//     }
//   }
//   return uniqueElements
// }

// console.log(removeDuplicates(duplicates))

//! Ejercicio 14 : Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

// const nameFinder = [
//   'Peter',
//   'Steve',
//   'Tony',
//   'Natasha',
//   'Clint',
//   'Logan',
//   'Xabier',
//   'Bruce',
//   'Peggy',
//   'Jessica',
//   'Marc',
// ]

// function finderName(arr, nameToFind) {
//   const index = arr.indexOf(nameToFind)
//   if (index !== -1) {
//     return {
//       found: true,
//       position: index,
//     }
//   } else {
//     return {
//       found: false,
//     }
//   }
// }

// // Ejemplo de uso:
// const nameToFind = 'Steve'
// const result = finderName(nameFinder, nameToFind)

// if (result.found) {
//   console.log(`Se encontró '${nameToFind}' en la posición ${result.position}`)
// } else {
//   console.log(`No se encontró '${nameToFind}' en el array.`)
// }

//! Ejercicio 15 :Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

// const counterWords = [
//   'code',
//   'repeat',
//   'eat',
//   'sleep',
//   'code',
//   'enjoy',
//   'sleep',
//   'code',
//   'enjoy',
//   'upgrade',
//   'code',
// ]

// function repeatCounter(arr) {
//   const wordCount = {}

//   for (const word of arr) {
//     if (wordCount[word]) {
//       wordCount[word] += 1
//     } else wordCount[word] = 1
//   }
//   return wordCount
// }

// const wordCounts = repeatCounter(counterWords)
// console.log(wordCounts)

//!Ejercicio [16] Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

// const products = [
//   'Camiseta de Pokemon',
//   'Pantalón coquinero',
//   'Gorra de gansta',
//   'Camiseta de Basket',
//   'Cinturón de Orión',
//   'AC/DC Camiseta',
// ]

// for (let i = 0; i < products.length; i++) {
//   if (products[i].includes('Camiseta')) {
//     console.log(products[i])
//   }
// }

//! 17 Probando For...of: Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log sus valores. Puedes usar este array:

// const placesToTravel = [
//   'Japon',
//   'Venecia',
//   'Murcia',
//   'Santander',
//   'Filipinas',
//   'Madagascar',
// ]

// for (let travel of placesToTravel) {
//   console.log(travel)
// }

//! 18 Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

// const alien = {
//   name: 'Wormuck',
//   race: 'Cucusumusu',
//   planet: 'Eden',
//   weight: '259kg',
// }

// for (const key in alien) {
//   if (alien.hasOwnProperty(key)) {
//     console.log(`${key}: ${alien[key]}`)
//   }
// }

//! 18 Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array. Puedes usar este array:

// const placesToTravel = [
//   { id: 5, name: 'Japan' },
//   { id: 11, name: 'Venecia' },
//   { id: 23, name: 'Murcia' },
//   { id: 40, name: 'Santander' },
//   { id: 44, name: 'Madrid' },
// ]

// // Recorremos el array en orden inverso
// for (let i = placesToTravel.length - 1; i >= 0; i--) {
//   // Verificamos si el id es 11 o 40
//   if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
//     // Eliminamos el elemento actual del array
//     placesToTravel.splice(i, 1)
//   }
// }

// // Imprimimos el array modificado en la consola
// console.log(placesToTravel)

//! Mixed For...of e includes: Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función .includes() para comprobarlo.Puedes usar este array:

// const toys = [
//   { id: 5, name: 'Buzz MyYear' },
//   { id: 11, name: 'Action Woman' },
//   { id: 23, name: 'Barbie Man' },
//   { id: 40, name: 'El gato con Guantes' },
//   { id: 40, name: 'El gato felix' },
// ]
// const filterToys = toys.filter((toy) => !toy.name.includes('gato'))
// console.log(filterToys)

//! Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:

const popularToys = []
const toys = [
  { id: 5, name: 'Buzz MyYear', sellCount: 10 },
  { id: 11, name: 'Action Woman', sellCount: 24 },
  { id: 23, name: 'Barbie Man', sellCount: 15 },
  { id: 40, name: 'El gato con Guantes', sellCount: 8 },
  { id: 40, name: 'El gato felix', sellCount: 35 },
]

for (const toy of toys) {
  if (toy.sellCount > 15) {
    popularToys.push(toy)
  }
}
console.log(popularToys)
