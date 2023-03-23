/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

// console.log(firstFunction (1, 2))
function firstFunction(a, b) {
  return a + b
}
// firstFunction = 'asdas'

// console.log(secondFunction (1, 2))

const secondFunction = function (a, b) {
  return a + b
}

// secondFunction = true

console.log(firstFunction (1, 2))
console.log(secondFunction (1, 2))