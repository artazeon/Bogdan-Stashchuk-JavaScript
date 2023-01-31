/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
    {
    carBrand: 'Mitsubishi',
    price: 100,
    isAvailableForSale: false
    },
    {
    carBrand: 'Audi',
    price: 110,
    isAvailableForSale: false
    },
    {
    carBrand: 'Rover',
    price: 90,
    isAvailableForSale: true
    }
    
]

cars.push(
    {
    carBrand: 'Lamba',
    price: 480,
    isAvailableForSale: false
    }
)

console.log(cars)