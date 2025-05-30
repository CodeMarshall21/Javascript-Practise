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


console.log(`-------- Sorting Array of Objects --------`);
const objectsArr = [
    {name: "Spongebob", age: 30, gpa: 3.0},
    {name: "Patrick", age: 37, gpa: 1.5},
    {name: "Squidward", age: 51, gpa: 2.5},
    {name: "Sandy", age: 27, gpa: 4.0}
]
console.log(`objectsArr => 
    `,objectsArr)

console.log(`objectsArr.sort((a,b) => a.age - b.age) => 
    `,objectsArr.sort((a,b) => a.age - b.age))


console.log(`objectsArr.sort((a,b) => a.name.localeCompare(b.name)) =>    the only way to compare strings
    `,objectsArr.sort((a,b) => a.name.localeCompare(b.name)));

console.log(`objectsArr.sort((a,b) => b.name.localeCompare(a.name)) =>    reverse order
    `,objectsArr.sort((a,b) => b.name.localeCompare(a.name)))

console.log(``);