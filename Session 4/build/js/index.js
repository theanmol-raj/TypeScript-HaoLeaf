"use strict";
//  option parameters in function
//  typeof
let custom = (a, b, c) => {
    if (typeof c === "undefined")
        return a + b;
    return a + b + c;
};
// console.log(custom(2,3,4))
// console.log(custom(2,3))
let custom2 = (...x) => {
    return x.reduce((acc, curr) => curr + acc);
};
// console.log(custom2(1,2,3,4,5))
// never return type from function
let custom3 = (a) => {
    console.log(a);
    throw new Error("ninbjlkhjh");
};
// waf to take input as string or number
// and return true for string and false
// for number
let custom4 = (a) => typeof a === "string";
let a = "10";
let b = a; // converting more secific type to a less specific type
let c = a; // converting more secific type to a less specific type
let d = a; // converting to a more secific type
let k = "10";
// 10 as string
let x = document.getElementById("#img");
let person = {
    name: "Arbaz",
    email: "Test@gmail.com",
    eligible: true
};
//  console.log(person.name)
//  console.log(person['name'])
let key = 'xyz';
let person2 = {
    name: "Arbaz",
    email: "Test@gmail.com",
    eligible: true
};
//  console.log(person.name)
//  console.log(person['name'])
let key2 = 'name';
console.log(person2[key2]);
console.log(person2[key2]);
console.log(person2[key2]);
