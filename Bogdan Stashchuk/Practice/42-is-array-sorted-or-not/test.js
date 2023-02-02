const a = [12, 54, 18, 130, 44]

function arraySortInfo (inputArray) {
 return  inputArray.every(elem => typeof elem === 'number'); 
}


console.log(arraySortInfo(a)) // 

