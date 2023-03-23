const people = [
  { name: 'Надя', age: 52 },
  { name: 'Таня', age: 52 },
  { name: 'Вася', age: 23 },
  { name: 'Дима', age: 24 },
  { name: 'Толя', age: 15 },
  { name: 'Галя', age: 15 },
  { name: 'Федя', age: 64 },

]

const arta = people.find(person => person.age == '15')
console.log(arta)
