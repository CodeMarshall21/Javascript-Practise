// JSON = (JavaScript Object Notation) data-interchange format 
//               Used for exchanging data between a server and a web application
//               JSON files {key:value} OR [value1, value2, value3]

// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to a JS object

console.log(`---------- JSON.stringify() ----------`);

const names = ["spongebob","patrick","squidward","sandy"];
const person = {
    "First name": "Spongebob",
    "Last name" : "Squarepants",
    "age": 30,
    "hobbies":["Karate", "Jellyfishing", "Cooking"],
    "isEmployed": true
};

const people = [
    {
        "First name": "Spongebob",
        "Last name" : "Squarepants",
        "age": 30,
        "isEmployed": true
    },
    {
        "First name": "Squiward",
        "Last name" : "Quincy",
        "age": 35,
        "isEmployed": true
    },
    {
        "First name": "Patrick",
        "Last name" : "Star",
        "age": 32,
        "isEmployed": false
    },
    {
        "First name": "Sandy",
        "Last name" : "Jennifer",
        "age": 25,
        "isEmployed": true
    }
]

const namesJsonString = JSON.stringify(names);
const peronsJsonString = JSON.stringify(person);
const peopleJsonString = JSON.stringify(people);

console.log(`const namesJsonString = JSON.stringify(names) => `,namesJsonString);
console.log(`const peronsJsonString = JSON.stringify(person) => `,peronsJsonString);
console.log(`const peopleJsonString = JSON.stringify(people) => `,peopleJsonString);

console.log(``);

console.log(`---------- JSON.parse() ----------`);

const namesString = `["spongebob","patrick","squidward","sandy"]`;

const personString = `{
    "First name": "Spongebob",
    "Last name" : "Squarepants",
    "age": 30,
    "hobbies":["Karate", "Jellyfishing", "Cooking"],
    "isEmployed": true
}`;

const peopleString = `[
    {
        "First name": "Spongebob",
        "Last name" : "Squarepants",
        "age": 30,
        "isEmployed": true
    },
    {
        "First name": "Squiward",
        "Last name" : "Quincy",
        "age": 35,
        "isEmployed": true
    },
    {
        "First name": "Patrick",
        "Last name" : "Star",
        "age": 32,
        "isEmployed": false
    },
    {
        "First name": "Sandy",
        "Last name" : "Jennifer",
        "age": 25,
        "isEmployed": true
    }
]`;


const namesStringJson = JSON.parse(namesString);
const personStringJson = JSON.parse(personString);
const peopleStringJson = JSON.parse(peopleString);


console.log(`const namesStringJson = JSON.parse(namesString) => `,namesStringJson);
console.log(`const personStringJson = JSON.parse(personString) => `,personStringJson);
console.log(`const peopleStringJson = JSON.parse(peopleString) => `,peopleStringJson);

console.log(``);

console.log(`---------- fetch() ----------`);

fetch("people.json").then(
    response => response.json()
).then(
    values => values.forEach(
        value => console.log(value)
    )
)