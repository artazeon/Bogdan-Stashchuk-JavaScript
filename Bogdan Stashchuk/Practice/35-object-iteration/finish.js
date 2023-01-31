/** ЗАДАЧА 35 - Итерация по свойствам объекта
 *
 * 1. Переберите все собственные свойства объекта
 *
 * 2. Если имя свойства (ключ) равно "key1" или "key3",
 * выведите значение свойства в консоль.
 */

const myObject = {
  key1: true,
  key5: 10,
  key3: 'abc',
  key4: null,
  key10: NaN,
}

// console.log(Object.keys(myObject))

Object.keys(myObject).forEach(key => {

  if (key === 'key3' ||  key === 'key4') {
    console.log(key, myObject[key])}
})


