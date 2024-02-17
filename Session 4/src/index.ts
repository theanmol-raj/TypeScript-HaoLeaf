//  option parameters in function
//  typeof

type MathFunction = (a: number, b: number, c?: number) => number;

let custom: MathFunction = (a, b, c) => {
  if (typeof c === "undefined") return a + b;
  return a + b + c;
};

// console.log(custom(2,3,4))
// console.log(custom(2,3))

let custom2 = (...x: number[]): number => {
  return x.reduce((acc, curr) => curr + acc);
};

// console.log(custom2(1,2,3,4,5))

// never return type from function

let custom3 = (a: string) => {
  console.log(a);

  throw new Error("ninbjlkhjh");
};

// waf to take input as string or number
// and return true for string and false
// for number

let custom4 = (a: string | number): boolean => typeof a === "string";

//  Type Casting

type A = string;
type B = number | string;
type D = "10";

let a: A = "10";
let b = a as B; // converting more secific type to a less specific type
let c = <B>a; // converting more secific type to a less specific type

let d = a as D; // converting to a more secific type

let k = "10" as unknown as number | number;
// 10 as string

let x = document.getElementById("#img") as HTMLImageElement;
// let x = <HTMLImageElement>document.getElementById('#img')
// x.src
// try to remove the type casting  and see if .src was available on

// Index Signatures

type Person = { 
    [index : string]: (string | boolean) ,
    name: string, 
    email: string
    eligible : boolean
 };

let person : Person = { 
    name: "Arbaz", 
    email: "Test@gmail.com" ,
    eligible : true
 }

//  console.log(person.name)
//  console.log(person['name'])

 let key :string = 'xyz';

//  console.log(person[key]) // uncomment to look at the problem which index signatures can result into



type Person2 = { 
    name: string, 
    email: string
    eligible : boolean
 };

let person2 : Person2 = { 
    name: "Arbaz", 
    email: "Test@gmail.com" ,
    eligible : true
 }

//  console.log(person.name)
//  console.log(person['name'])

 let key2  = 'name';
 
 type Something = 'name' | 'email' | 'eligible' ;
 console.log(person2[key2 as Something])

 console.log(person2[key2 as keyof Person2])

 console.log(person2[key2 as keyof typeof person2])


//  Record Examples

 type Z = 'name' | 'email' | 'eligible' ;

 type Employee = Record<Z ,(string|number)>

 const employee :Employee = {
  name : "anmol",
  email : 'jjs',
  eligible : "yes"
 }



//  Partial Example 

type Employee2 = Partial<Employee>
// type Employee2 = Partial<Record<Z ,(string|number)>>

const employee2 :Employee2 = {
  name : "anmol",
  email : 'jjs',

}