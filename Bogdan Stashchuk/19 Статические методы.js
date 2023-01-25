class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }

    static mergeComment (first, second) {
        return `${first} ${second}`
    }
}

Comment.mergeComment('First comment.', 'Second comment.')

const myComment = new Comment ('Awesome comment')

Comment.mergeComment('Some text', 'Some other text')