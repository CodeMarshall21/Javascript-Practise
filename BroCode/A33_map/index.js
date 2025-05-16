// .map() = accepts a callback and applies that function 
//                 to each element of an array, then return a new array


// ------------ EXAMPLE 1 ------------

const arr = [1,2,3,4,5];

const square = arr.map(squared);
const cube = arr.map(cubed);

console.log(square);
console.log(cube);


function squared(element){
    return Math.pow(element,2);
}


function cubed(element){
    return Math.pow(element,3);
}

// ------------ EXAMPLE 2 ------------
const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsUpper);
console.log(studentsLower);

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}