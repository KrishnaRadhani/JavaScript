// printing hello
console.log("Hello");

// printing name and age through variable
fullName = "Tom Hardy";
age = "age="+21
console.log(fullName,age);

// null and undefined
x = null;
console.log(x);
y = undefined;
console.log(y);

// let and const 
let every = "everyone";
let one = "be one";
console.log(every,one);
const DATE = "7/3/2024";
console.log(DATE);
let a;  // undefined value
console.log(a); 

// blocks in js
{
    let a = 10; // note you cannot redefine same js variable in single block
    console.log(a);
}

//Data types in js

// primitive(7):Number,String,Boolean,undefined,null,BigInt,Symbol
// non-primitive():objects,

// OBJECTS{key : value}
const student = {
    name : "Krishna Radhani",
    age : 21,
    result : 8.2,
    isPass : true
};
student["age"] = student["age"] + 1; // assigning new value in object
 

