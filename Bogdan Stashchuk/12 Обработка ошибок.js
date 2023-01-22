// const fnWithError = () => {
//     throw new Error('Ошибочка')
// }

// fnWithError()

// console.log('Continue...')

////////////////////////////////////////////////////////////////

const fnWithError = () => {
    throw new Error('Ошибочка')
}

try {
fnWithError()
} catch (error) {
// console.log(error)
console.log(error.message)
}

console.log('Continue...')