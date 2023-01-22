// function multByFactor (value, miltiplier = 1) {
//     return console.log(value * miltiplier)
// }

// multByFactor (10, 2)
// multByFactor (5)


//////////// ШАГ 2 - Переписать чтобы было анонимное функциональное выражение
// const multByFactor = function(value, miltiplier = 1) {
//     return console.log(value * miltiplier)
// }

// multByFactor (10, 2)
// multByFactor (5)

//////////// ШАГ 3 - Переписать чтобы была стрелочная функция
// const multByFactor = (value, miltiplier = 1) => {
//     return console.log(value * miltiplier)
// }

// multByFactor (10, 2)
// multByFactor (5)

//////////// ШАГ 4 - Переписать чтобы одной строкой
const multByFactor = (value, miltiplier = 1) => console.log(value * miltiplier)

multByFactor (10, 2)
multByFactor (5)