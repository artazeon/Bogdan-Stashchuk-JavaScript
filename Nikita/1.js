let startLoad = 'step--loader'
// let startLoad = 'step--1'

const stepCount = () => {
    let startLoadArr = startLoad.split('--')
    let countNumberFirstPart = startLoadArr[0]
    let countNumberSecondPart = startLoadArr[1]

    
    if (Number(countNumberSecondPart)) {
        // console.log('число')
        newCount = countNumberSecondPart++
        console.log((countNumberFirstPart) + '--' + countNumberSecondPart)
        // console.log(typeof (countNumberSecondPart))
    
}
    else {console.log('не число')
    console.log((countNumberFirstPart) + '--' + 1)
} 

} 

stepCount()



//11
