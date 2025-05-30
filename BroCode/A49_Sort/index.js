// sort() = method used to sort elements of an array in place.
//               Sorts elements as strings in lexicographic order, not alphabetical
//               lexicographic = (alphabet + numbers + symbols) as strings


console.log(`-------- Sorting String Array --------`);
const stringArray = ["banana", "orange", "grape", "cherries", "apple"];
console.log(`stringArray => `,stringArray);
console.log(`stringArray.sort() => `,stringArray.sort());
console.log(``);

console.log(`-------- Sorting Integer Array --------`);
const integerArray = [7,4,8,3,9,2,0,1,10,6,5];
console.log(`integerArray => `,integerArray);
console.log(`integerArray.sort() => `,integerArray.sort());
console.log(``);


console.log(`-------- Sorting Integer Array 2 --------`);
const integerArray2 = [7,4,8,3,9,2,0,1,10,6,5];
console.log(`integerArray2 => `,integerArray2);
console.log(`FORWARD SORTING: 
    integerArray.sort((a,b) => a - b) => `,integerArray.sort((a,b) => a - b));
console.log(`BACKWARD SORTING: 
    integerArray.sort((a,b) => b - a) => `,integerArray.sort((a,b) => b - a));


console.log(``);
