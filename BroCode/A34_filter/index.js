// filter() = creates a new array by filtering out
//                elements with a callback

// ----------- EXAMPLE 1 -----------
console.log(`----------- EXAMPLE 1 -----------`);
console.log(`difference between .map() and .filter()`)
let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(`arr -> `,arr)
let filteredArr = arr.filter(isEven);
let mapArr = arr.map(isEven);
console.log(`arr.filter(isEven) -> `,filteredArr);
console.log(`arr.map(isEven) -> `,mapArr);

function isEven(element){
    return element % 2 === 0;
}

// ----------- EXAMPLE 2 -----------
console.log(`----------- EXAMPLE 2 -----------`);

let ages = [16, 17, 17, 18, 19, 20, 65];
console.log(`ages -> `,ages);

let adults = ages.filter(isAdult);

console.log(`ages.filter(isAdult) - > `,adults);

function isAdult(element){
    return element >= 18;
}