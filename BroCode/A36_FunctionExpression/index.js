// function expressions = a way to define functions as
//                        values or variables

//  1. Callbacks in asynchronous operations
//  2. Higher-Order Functions
//  3. Closures
//  4. Event Listeners

// ----------- EXAMPLE 1 -----------

const hello = function(){
    console.log("Hello");
}

hello();


// ----------- EXAMPLE 2 -----------

function hello2 (){
    console.log("goodbye");
}

setTimeout(hello2,3000);

// ----------- EXAMPLE 3 -----------

setTimeout(function(){
    console.log("see ya later");
},3000);

// ----------- EXAMPLE 4 -----------

const numbers = [1, 2, 3, 4, 5, 6];
console.log(`numbers -> `,numbers)
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
})

const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});

const evenNumbers = numbers.filter(function(element){
    return element % 2 === 0;
});

const oddNumbers = numbers.filter(function(element){
    return element % 2 !== 0;
})

const total = numbers.reduce(function(curr,next){
    return curr + next;
})


console.log(`squares -> `,squares);
console.log(`cubes -> `,cubes);
console.log(`evenNumbers -> `,evenNumbers);
console.log(`oddNumbers -> `,oddNumbers);
console.log(`total -> `,total);
