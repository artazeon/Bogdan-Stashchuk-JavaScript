// const linkA = {
//     a: 10,
//     b: true
// }
// const linkB = linkA
// linkB.c = 'Yo Yo Yo'
// console.log (linkA.c)

// let A = 10
// let B = A
// B = 'Lupa'
// console.log(A)

//////////////////////////////////////////////////////////////

// const myCity = {
//     city: 'Soligorsk',
// }
// myCity.popular = true;
// console.log(myCity)
// myCity.country = 'Belarus';
// console.log(myCity)
// delete myCity.country;
// console.log(myCity)
// myCity['big city'] = false;
// console.log(myCity)
// const countryPropertyName = 'country'
// myCity[countryPropertyName] = 'Poland';
// console.log(myCity)
// myCity.school = Object;
// myCity.school.school1 = 'Школа №1';
// myCity.school.school2 = 'Школа №2';
// console.log(myCity.school.school2)

//////////////////////////////////////////////////////////////

// Избегаем мутирования в главном объекте, копирование объекта
// Вложенные объекты не скопируються!!!

// const person = {
//     name: 'Bob',
//     age: 25
// }

// const person2 = Object.assign({}, person)
// person2.age = 100

// console.log(person2.age)
// console.log(person.age)


//////////////////////////////////////////////////////////////

// Избегаем мутирования в главном объекте, копирование объекта (Вариант №2)
// Вложенные объекты ТОЖЕ не скопируються!!!

// const person = {
//     name: 'Bob',
//     age: 25
// }

// const person2 = { ...person }
// person2.name = 'Alice'

// console.log(person2)
// console.log(person)

//////////////////////////////////////////////////////////////

// Избегаем мутирования в главном объекте, копирование объекта (Вариант №3)
// Вложенные объекты УЖЕ СКОПИРУЮТСЯ!!!. Т.е. ссылки на вложеные объекты не сохраняются!

const person = {
    name: 'Bob',
    age: 25
}

const person2 = JSON.parse(JSON.stringify(person))
person2.name = 'Alice'

console.log(person2)
console.log(person)
//////////////////////////////////////////////////////////////