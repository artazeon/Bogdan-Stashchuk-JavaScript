// let val = 10

// if (val > 5) {
//     val +=20
// }

// console.log(val)

///////////////////////////////////////////

// const person = {
//     age: 20
// }

// if (!person.name) {
//     console.log('Имя не указано')
// }

///////////////////////////////////////////

// let val = 10

// if (val < 5) {
//     val +=20
// } else {
//     val -=20
// }

// console.log(val)

///////////////////////////////////////////

// const age = 7

// if (age > 18) {
//     console.log('Is adult')
// } else if ( age >= 12) {
//     console.log('Is teenager')
// } else {
//     console.log('Is child')
// }

///////////////////////////////////////////

// const age = 17

// if (age > 18) {
//     console.log('Is adult')
// }

// if ( age >= 12 && age < 18) {
//     console.log('Is teenager')
// }

// if ( age < 12) {
//     console.log('Is child')
// }

///////////////////////////////////////////

// Использование if в функциях

// const sumPositiveNumber = (a, b) => {
//     if (typeof a !== 'number' || typeof b !== 'number' ) {
//         return 'One of the arguments is not a number'
//     }

//     if ( a < 0 || b < 0) {
//         return 'Number is not a positive'
//     }

//     console.log (a + b)
//     return a + b
    
// }

// sumPositiveNumber (2, 5)

///////////////////////////////////////////

// Использование switch

// switch () {
//     case A:
        
//     break

//     case B:

//     break

//     default: 
// }

///////////////////////////////////////////

// Использование switch

// const month = 2

// switch (month) {
//     case 12:
//         console.log('Декабрь')
//     break
        
//     case 1:
//         console.log('Январь')
//     break

//     case 2: 
//         console.log('Ферваль')
//     break

//     default: 
//         console.log('Это не зимний месяц')
// }

///////////////////////////////////////////

// Тернарный оператор
// Условие ? Выражение 1 : Выражение 2

//////////////////

// Условие 
// ? Выражение 
// 1 : Выражение 2

//////////////////
// const value = 11

// value 
//     ? console.log('Условие истинно')
//     : console.log('Условие ложно')

//////////////////

// const value1 = 11
// const value2 = 25

// value1 && value2
//     ? myFunction1 (value1, value2)
//     : myFunction2 ()

//////////////////

let value = -5

const res = value > 0 ? value : -value
console.log(res)

