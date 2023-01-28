//      EXORT / IMPORT

// файл modelOne.js

const myName = () => {
    console.log('Art')
}

export default myName

// файл modelTwo.js

import printMyName from './modelOne.js'

printMyName ()
