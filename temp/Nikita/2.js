const company = {
    production: {
        team: {
            front: [120, 160, 130, 10, 10]
            }
        }
    }


let arr = company.production.team.front
console.log(arr)

let maxHour = Math.max(...arr);
let minHour = Math.min(...arr);
let middleHour = (maxHour + minHour) / 2
console.log(maxHour)
console.log(minHour)
console.log(middleHour)







    //Object.keys(company.production.team.front).forEach(key => {

 //   })
    
    

// console.log(Object.keys(company.production.team.front))

// let maxHour = Math.max(arr)
//     console.log(maxHour)