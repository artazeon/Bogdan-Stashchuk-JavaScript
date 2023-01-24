// for
// for ... in ...
// while
// do ... while
// for ... off ...

//////////////////// For

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

//////////////////// For для массивов, - но не рекомендуется для массивов

// const myArray = ['first', 'second', 'third']

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i])
// }


//////////////////// ForEach - для перебора массивов

// const myArray = ['first', 'second', 'third']

// myArray.forEach((element, index) => {
//     console.log(element, index)
// })

//////////////////// While - пока условие позволяет

// let i = 0

// while (i < 5) {
//     console.log(i)
//     i++
// }

//////////////////// Do While - выполниться хотябы один раз
// let i = 0

// do {
//     console.log(i)
//     i++
// }   while (i < 5)

//////////////////// For In - блок инструкций выполняеться для каждого из свойств объекта

// for (key in Object) {

// }

/////////// For In - перебирает все свойства объекта

// const myObject = {
//     x: 10,
//     y: true,
//     z: 'abc'
// }


// for (const key in myObject) {
//     console.log(key, myObject[key])
// }

//////////////////// For In forEach для объектов

// const myObject = {
//     x: 10,
//     y: true,
//     z: 'abc'
// }


// Object.keys(myObject).forEach(key => {
//     console.log(key, myObject[key])
// })

//////////////////// For In forEach для объектов, перебоор сразу значений

// const myObject = {
//     x: 10,
//     y: true,
//     z: 'abc'
// }


// Object.values(myObject).forEach(values => {
//     console.log(values)
// })

/////////////////////////////////// For In для массивов

// const myArray = [true, 10, 'abc', null]

// for (const key in myArray) {
//     console.log(myArray[key])
// }

/////////////////////////////////// FOR OF (не для объектов)

// const myString = 'Hey'

// for (const letter of myString) {
//     console.log(letter)
// }

/////////////

const myArray = [true, 10, 'abc', null]

for (const element of myArray) {
    console.log(element)
}