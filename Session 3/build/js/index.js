"use strict";
// let arr = [ "Sumera" ,"Arbaz" ,"Jyoti"]
// let arr2 = [2,3,4]
// let arr3 = [ ...arr , ...arr2 ] 
let arr;
let arr2 = [];
let arr3 = [];
//  Tuples 
let t1 = ["Arbaz", true, 24];
let t2 = ["Arbaz", 24, true];
let t3 = ["Arbaz", 24, true];
// Interface Declaration 
// interface Student {
//     name : string ,
//     id : string,
//     email : string
// }
let student = {
    name: "Ejaz",
    id: '1',
    email: 'test@gmail.com'
};
let student2 = {
    name: "Ejaz",
    id: '1',
    email: '2' // try assigning a number or boolean to  throw an error
};
let user = {
    name: "Anmol",
    id: 5,
    email: 'test@gmail.com',
    role: 'admin'
};
//  Functions
let add = (a, b) => {
    return a + b;
};
let sub = (a, b) => {
    return a - b;
};
let multiply = (a, b) => {
    return a * b;
};
// Void Return
let voidfn = (a) => {
    console.log(a);
};
// never return 
let Neverfn = (a) => {
    console.log(a);
    while (true) {
    }
};
