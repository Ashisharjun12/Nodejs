
//you can code like this also
// const math = require('./math.js')

// console.log('now you add :', math.add(2,5) )

// console.log('now you add :', math.sub(2,5) )


//type-2

const { add ,sub} = require('./math')


console.log("you can add :" , add(3,7) )

console.log("you can sub :", sub(5,7));

