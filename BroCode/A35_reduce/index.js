// .reduce() = reduce the elements of an array
//                     to a single value    

// ----------- EXAMPLE 1 -----------
console.log(`----------- EXAMPLE 1 -----------`);
const prices = [5, 30, 10, 25, 15, 20];
let i = 0;
let accum = 0;


console.log(`prices -> `,prices);

const TOTAL = prices.reduce(sum);
console.log(`prices.reduce(sum) -> `,`₹${TOTAL.toFixed(2)}`);

function sum(accumulator,element){
    console.log(`${i}th iteration : accumulator -> ${accumulator} and element -> ${element}`);
    i++;
    return accumulator + element;
};