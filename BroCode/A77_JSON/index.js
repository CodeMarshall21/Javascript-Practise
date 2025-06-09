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

