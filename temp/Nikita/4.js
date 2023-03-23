// const counter = () => {
//     let num = 0
//     function countUp(){
//         return ++num
//     }
//     return {
//         countUp
//     }
// }

// const oneCount = counter()

// console.log(oneCount.countUp())
// console.log(oneCount.countUp())
// console.log(oneCount.countUp())
// console.log(oneCount.countUp())
// console.log(oneCount.countUp())


const counter = () => {
    let num = 0
    return function countUp(){
        return ++num
    }
}

const oneCount = counter()

console.log(oneCount())
console.log(oneCount())
console.log(oneCount())
console.log(oneCount())
