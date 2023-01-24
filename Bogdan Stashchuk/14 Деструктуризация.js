//////////// Объекты

// const userProfile = {
//     name: 'Artiom',
//     commentsQty: 23,
//     hasSignedAgreement: false,
// }

// const { name, commentsQty} = userProfile
// const { hasSignedAgreement} = userProfile

// console.log(name)
// console.log(commentsQty)
// console.log(hasSignedAgreement)

////////////////////////////////////////////////////////
//////////// Массивы 

// const fruits = ['Apple', 'Banana']
// const [fruitOne, fruitTwo] = fruits

// console.log(fruitOne)
// console.log(fruitTwo)

////////////////////////////////////////////////////////
//////////// Деструктуризация в функциях

const userProfile = {
    name: 'Artiom',
    commentsQty: 23,
    hasSignedAgreement: false,
}

const userInfo = ({name, commentsQty}) => {
    if (!commentsQty) {
        return `User ${name} has no commenst`
    }
    return `User ${name} has ${commentsQty} commenst`
}

userInfo(userProfile)