// spread operator =  ... allows an iterable such as an
//                                  array or string to be expanded
//                                  into separate elements
//                                 (unpacks the elements)

const Display = document.getElementById("display");

// ------------- EXAMPLE 1 -------------
console.log(`------------- EXAMPLE 1 -------------`);
let numbers = [1,2,3,4,5,6,7,8,9,10];
let MAXIMUMX = Math.max(numbers);
let Max = Math.max(...numbers);
console.log(`numbers -> `,numbers)

console.log(`without spread operator -> ${MAXIMUMX}`);
console.log(`WITH spread operator -> ${Max}`);

// ------------- EXAMPLE 2 -------------
console.log(`------------- EXAMPLE 2 -------------`);

let Username = "Keshav KV";
let letters = [...Username];

console.log(`Usernmae -> `,Username)
console.log(`WITH spread operator -> ${letters}`);

// ------------- EXAMPLE 2 ------------- 
console.log(`------------- EXAMPLE 3 -------------`);
console.log(`------------- SHALLOW COPY -------------`);

let fruits = ["apple","banana","orange"];
let veggies = ["carrots","celery","potatoes"];
console.log(`fruits - > `,fruits);
console.log(`veggies - > `,veggies);


let foods = [...fruits,...veggies,"eggs","milk"];
console.log(`foods -> `,foods);

