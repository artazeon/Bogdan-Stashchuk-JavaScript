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

const post = {
    title: 'My post',
    likesQty: 5

}
JSON.stringify(post)
const postStringified = JSON.stringify(post)
JSON.parse(postStringified)

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////