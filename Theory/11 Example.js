// const newPost = (post, addedAt = Date()) => ({
//     ...post,
//     addedAt
// }

// )

// const firstPost = {
//     id: 1,
//     autor: 'Artiom'
// }

// newPost(firstPost)

////////////////////////////////////////////

const newPost = (post, addedAt = Date()) => console.table({
    ...post,
    addedAt: addedAt
})

const firstPost = {
    id: 1,
    autor: 'Artiom'
}

newPost(firstPost)


