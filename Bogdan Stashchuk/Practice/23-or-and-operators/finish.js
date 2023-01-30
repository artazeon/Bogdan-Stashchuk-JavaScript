/** ЗАДАЧА 23 - ИЛИ и И операторы
 *
 * Что будет выведено в консоль?
 */

console.log(3 || (true && null) || false)

console.log('***************')

// 1)
// true && null
// null т.к. && оператор котороткого замыкания вернет последнее ложное

// 2)
// 3 || null || false
// 3 т.к. первое правдивое


console.log(true && null)
console.log(3 || null || false)
console.log(null || 3 || null || false)
