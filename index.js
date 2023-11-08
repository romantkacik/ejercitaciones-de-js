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
{
  if (number3 * 5 && number1 * 2 == number2) {
    console.log(
      'number3 por 5 es igual a number1 Y number1 por 2 es igual a number2'
    )
  }
  if (number2 / 2 === number1 || number1 / 5 === number3) {
    console.log(
      'number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3'
    )
  }
}
