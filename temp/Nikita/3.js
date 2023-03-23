const company = {
    production: {
        team: {
            front: [120, 160, 130, 10, 10]
            }
        }
    }
const arr = company.production.team.front

console.log(arr)



function maxHour(yarikHour2022)  {
    let maxN = 0
    const minN = arr[0]
    yarikHour2022.every(elem => elem > maxN ? maxN = elem : true) 
    
     console.log(maxN)
}

maxHour(arr)


// let minHour = Math.min(...arr);
// let middleHour = (maxHour + minHour) / 2
// console.log(maxHour)
// console.log(minHour)
// console.log(middleHour)


