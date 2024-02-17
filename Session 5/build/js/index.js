"use strict";
//  Generic Types 
let returnDefault = (a) => a;
let rD = (a) => a;
//  Waf that returns true is type is object else false
const isObject = (a) => {
    // logic
    return (typeof a === 'object' && !Array.isArray(a));
};
const signInUser = (user, key) => {
    console.log(key);
    return user;
};
console.log(signInUser({ uid: 'jbhugyv', bhv: 'uibiby', name: 'Anmol' }, 8));
console.log(signInUser({ uid: 'tes', name: 'Anmol' }, 7));
