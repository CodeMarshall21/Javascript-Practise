// destructuring =  extract values from arrays and objects,
//                              then assign them to variables in a convenient way
//                              [] = to perform array destructuring
//                              {} = to perform object destructuring

// ---------- EXAMPLE 1 ----------
// SWAP THE VALUE OF TWO VARIABLES
console.log(`EXAMPLE 1: SWAP THE VALUE OF TWO VARIABLES`);
let a = 10;
let b = 20;

console.log(`Before Swapping: a = ${a}, b = ${b}`);


[a,b] = [b,a];

console.log(`Swapping: [a,b] = [b,a]`);
console.log(`After Swapping: a = ${a}, b = ${b}`);
console.log(``);


// ---------- EXAMPLE 2 ----------
// SWAP 2 ELEMENTS IN AN ARRAY
console.log(`EXAMPLE 2: SWAP 2 ELEMENTS IN AN ARRAY`);
const colors = ["red","green","blue","black","white"];
console.log(`Before Swapping: colors = ${colors.join(", ")}`);

[colors[0],colors[4]] = [colors[4],colors[0]];

console.log(`Swapping: [colors[0],colors[4]] = [colors[4],colors[0]]`)
console.log(`After Swapping: colors = ${colors.join(", ")}`);
console.log(``);



// ---------- EXAMPLE 3 ----------
// ASSIGN ARRAY ELEMENTS TO VARIABLES
console.log(`EXAMPLE 3: ASSIGN ARRAY ELEMENTS TO VARIABLES`);
const [firstColor, secondColor, thirdColor, ...restOfThem] = colors;
console.log(`Assigning Elements: const [firstColor, secondColor, thirdColor, ...restOfThem] = colors;`)
console.log(`firstColor: ${firstColor}`);
console.log(`secondColor: ${secondColor}`);
console.log(`thirdColor: ${thirdColor}`);
console.log(`restOfThem: ${restOfThem.join(", ")}`)
console.log(``);


//Let me create a class before this...
class User{
    constructor(firstName, lastName, age, job = "UNEMPLOYED"){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.job = job;
    }
}
console.log(User);
// ---------- EXAMPLE 4 ----------
// EXTRACT VALUES FROM OBJECTS
console.log(`EXAMPLE 4: EXTRACT VALUES FROM OBJECTS`);
const person1 = new User("Spongebob", "Squarepants", 20, "Fry cook");
const person2 = new User("Patrick", "Star", 22);


const {firstName, lastName, age, job} = person1;

console.log(`const {firstName, lastName, age, job} = person1`)
console.log(`firstName: `,firstName);
console.log(`lastName: `,lastName);
console.log(`age: `,age);
console.log(`job: `,job);
console.log(``);


// ---------- EXAMPLE 5 ----------
// DESTRUCTURING IN FUNCTION PARAMETERS
console.log(`EXAMPLE 5: DESTRUCTURING IN FUNCTION PARAMETERS`);

function Destructuring({firstName, lastName, age, job}){
    console.log(`firstName: `,firstName);
    console.log(`lastName: `,lastName);
    console.log(`age: `,age);
    console.log(`job: `,job);
}
console.log(Destructuring);
console.log("Function Call => Destructuring(person2)")
Destructuring(person2)