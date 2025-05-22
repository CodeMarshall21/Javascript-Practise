// arrow functions = a concise way to write function expressions
//                                good for simple functions that you use only once
//                                (parameters) => some code


// ---------- EXAMPLE 1 ----------
console.log(`---------- EXAMPLE 1 ----------`);
const hello = (name,age) => {
    console.log(`hello ${name}`);
    console.log(`you are ${age} years old`);
}

hello("keshav",22);


// ---------- EXAMPLE 2 ----------

setTimeout(() => {
                console.log(`---------- EXAMPLE 2 ----------`);
                console.log(`hello`);
                console.log("Goodbye");
}, 3000);


// ---------- EXAMPLE 3 ----------

console.log(`---------- EXAMPLE 3 ----------`);
const arr = [1,2,3,4,5,6,7,8,9,10];

const squares = arr.map((elements) => Math.pow(elements,2));
console.log(`squares -> `,squares);

const cubes = arr.map((elements) => Math.pow(elements,3));
console.log(`cubes -> `,cubes);

const evens = arr.filter((elements) => elements % 2 === 0);
console.log(`evens -> `,evens);

const odd = arr.filter((elements) => elements % 2 !== 0);
console.log(`odd -> `,odd);

const sum = arr.reduce((accumulator,element) => accumulator + element);
console.log(`sum -> `,sum);
