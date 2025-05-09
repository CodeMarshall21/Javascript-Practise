// array = a variable like structure that can 
//         hold more than 1 value

let fruits = ["banana", "apple", "orange"];
console.log(fruits);

console.log(`fruits[2] -> `,fruits[2]);
console.log(`fruits[3] -> `,fruits[3]);

fruits.push("mango");
console.log(`fruits.push("mango") -> `, fruits);

fruits.pop();
console.log(`fruits.pop() -> `, fruits);

fruits.unshift("mango")
console.log("fruits.unshift(\"mango\") - > " , fruits);

fruits.shift()
console.log("fruits.unshift() - > " , fruits);

console.log("fruits.length -> ", fruits.length);

console.log("fruits.indexOf(\"apple\") - >",fruits.indexOf("apple"));

console.log("fruits.sort() -> ",fruits.sort());

console.log("fruits.sort().reverse() -> ",fruits.sort().reverse());

console.log("printing array elements using enhanced for loop:- ")
for (let fruit of fruits){
    console.log(fruit);
}