class NumberArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}

const myArray = new NumberArray (2, 5, 7)

console.log(myArray)
myArray.sum()
console.log(myArray.sum())