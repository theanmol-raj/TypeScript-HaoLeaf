//  Generic Types 

let returnDefault = <T>(a:T): T  => a

//generic types
type TypeRD = <T>(x : T) => T 
let rD :TypeRD = (a) => a


//  Waf that returns true is type is object else false

const isObject = <T>(a : T) : boolean => {
  // logic
  return (typeof a === 'object' && !Array.isArray(a))
}


// isObject({})
// isObject([])
// isObject(true)
// isObject('hi')
// isObject(7)

type UserCred = {
  uid : string,
}

const signInUser = <T extends UserCred ,V>(user : T , key : V) : T =>{
  console.log(key)
  return user
}


console.log(signInUser({uid : 'jbhugyv',bhv : 'uibiby' , name : 'Anmol'},8 ))
console.log(signInUser({uid : 'tes' ,name : 'Anmol'},7))

