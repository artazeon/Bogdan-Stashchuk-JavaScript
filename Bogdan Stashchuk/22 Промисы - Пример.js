const getData = (url) =>
    new Promise((resolve, reject)) =>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .cath(error => reject(error))

getData ('https://jsonplaceholder.typicode.com/todos/')
    .then(data => console.log(data))
    .cath(error => console.log(error.message))

    
