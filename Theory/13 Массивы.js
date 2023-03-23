// const myArray = [1, 2, 3]
// console.log(myArray)

// const myArray2 = new Array(1, 2, 3)
// console.log(myArray2)


// console.log(myArray === myArray2)

// const myArray3 = myArray
// console.log(myArray === myArray3)

////////////////////////////////////////////////////
// ////////forEach не возвращает
// const myArray = [1, 2, 3, 10]
// console.log(myArray)

// myArray.forEach(el => console.log(el * 2))

// //const res = myArray.forEach(el => console.log(el * 2))

// console.log(myArray)
// // console.log(res)

////////////////////////////////////////////////////
////////map создаёт новый массив и возвращает 
//////// стрелочная функция
const myArray = [1, 2, 3, 10]
console.log(myArray)

const newArray = myArray.map(el => el * 3)

console.log(newArray)
console.log(myArray)


//////////////
//////// стрелочная функция
// const myArray = [1, 2, 3, 10]
// console.log(myArray)

// const newArray = myArray.map((el) => {
//     return el * 3
// })

// console.log(newArray)
// console.log(myArray)
//////// анонимное функциональное выражение
// const myArray = [1, 2, 3, 10]
// console.log(myArray)

// const newArray = myArray.map(function (el) {
//     return el * 3
// })

// console.log(newArray)
// console.log(myArray)
