///////////////////////////// Создание экземпляра

// class Comment {
//     constructor(text) {
//         this.text = text
//         this.votesQty = 0
//     }

//     upvote() {
//         this.votesQty += 1
//     }
// }

// const firstComment = new Comment('First comment')
// console.log(firstComment)

// console.log(firstComment instanceof Comment)
// console.log(firstComment instanceof Object)

// firstComment.upvote()
// console.log(firstComment.votesQty)


/////////////////////////////  Создание нескольких экземпляров

class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }
}

const firstComment = new Comment('First comment')
const secondComment = new Comment('Second comment')
const thirdComment = new Comment('Third comment')

console.log(firstComment)
console.log(secondComment)
console.log(thirdComment)
