//ARITHMETIC OPERATORS
let a = 4;
let b = 2;

console.log("a =",a,"b =", b);
console.log("a + b =",a + b);
console.log("a - b =",a - b);
console.log("a * b =",a * b);
console.log("a / b =",a / b);
console.log("a % b =",a % b);
console.log("a ** b =",a ** b);

// UNARY OPERATOR
a++;
console.log("post increment",a);
a--;
console.log("post decriment",a);
++a;
console.log("pre increment",a);
--a;
console.log("pre decriment",a);
// note the differnce between pre and post is that pre changes the value during implementation and post changes the value after implementaion

// ASSIGNMENT OPERATOR
let c = 5;
 c+=4;
 console.log(c);
// c-=4;
// console.log(c);
// c*=4;
// console.log(c);
// c/=4;
// console.log(c);
// c%=4;
// console.log(c);
// c**=4;
// console.log(c);

// COMPARISON OPERATOR
let d = 5 ;
let e = 10;
console.log("d == e",d == e);
console.log("d != e",d != e);
console.log("d <= e",d <= e);
console.log("d < e",d < e);
console.log("d > e",d > e);
console.log("d >= e",d >= e);

let f = 5;
let g ="5"; 
console.log("f == g",f == g);// ans is true because string is converted into number by js automatically and then compared
console.log("f !== g",f !== g); // stricter operator checkes value and datatype of the value


// LOGICAL OPERATORS
let n = 6;
let o = 3;

// AND

let cond1 = n > o;
let cond2 = n === 6;

console.log("cond1 and cond2:",cond1 && cond2);

let cond3 = n < o;
let cond4 = n === 6;

console.log("cond3 and cond4:",cond3 && cond4);

// OR

let cond5 = n < o;
let cond6 = n === 6;

console.log("cond3 or cond4:",cond3 || cond4);

let cond7 = n == o;
let cond8 = n == 5;

console.log("cond7 or cond8:",cond7 || cond8);

// NOT
console.log("cond3 not cond4:",cond3 != cond4);

