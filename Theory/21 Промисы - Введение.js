const myPromise = new Promise ((resolve, reject) => {
    //Выполнение асинхронных дейсвий

    //Внутри этой функции нужно в результате выззвать одну из колбек функций resolve или reject

})




////////////////////////////////////////////////////////////////м




// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(error => console.log(error))



fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(json => console.log(json))
    .catch(error => console.log(error))




    
fetch('https://jsonplaceholder.typicode.com/todos/55')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error.message))