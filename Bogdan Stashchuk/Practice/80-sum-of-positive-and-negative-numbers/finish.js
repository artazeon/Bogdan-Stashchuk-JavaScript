/** ЗАДАЧА 80 - Сумма положительных и отрицательных чисел
 *
 * 1. Создайте функцию "sumPositiveNegative", которая принимает массив
 * и суммирует отдельно положительные и отрицательные числа.
 *
 * 2. Функция должна вернуть такой объект:
 *  {
 *    positive: 74, // сумма всех положительных чисел
 *    negative: -54 // сумма всех отрицательных чисел
 *  }
 */

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20]

// const sumPositiveNegative = (arr) => {
//     return arr.reduce((accum, item)=> {
//         if (item > 0) {
//             return {
//                 ...accum,
//                 positive: accum.positive + item,
//             }
//         }

//         return {
//             ...accum,
//             negative: accum.negative + item,
//         }
//     }, {positive: 0, negative: 0})
    
// }


const sumPositiveNegative = (arr) => {
    return arr.reduce((accum, item)=> {
        let type = item > 0 ? 'positive' : 'negative'
        
        return {
            ...accum,
            [type]: accum[type] + item,
        }
    }, {positive: 0, negative: 0})
    
}


// Создайте функцию "sumPositiveNegative" здесь

const result = sumPositiveNegative(nums)

console.log(result)
// { positive: 74, negative: -54 }
