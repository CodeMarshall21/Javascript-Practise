// nested objects = Objects inside of other Objects.
//                               Allows you to represent more complex data structures
//                               Child Object is enclosed by a Parent Object

//                               Person{Address{}, ContactInfo{}}
//                               ShoppingCart{Keyboard{}, Mouse{}, Monitor{}} 

console.log(`------------ EXAMPLE 1 ------------`);

const person = {
    firstName : "Spongebob",
    lastName : "Squarepants",
    age : 25,
    hobbies : ["coooking", "riding", "reading"],
    address : {
        street : "124 Conch St.",
        city : "Bikini Bottom",
        country : "Int. Waters"
    }
}

console.log(person);

for(const properties in person){
    console.log(`${properties}: `,person[properties]);
    // if (properties === "address"){
    //     for (const nestedProperties in person[properties]){
    //         console.log(`${nestedProperties}: `,person[properties][nestedProperties])
    //     }
    // }
}

console.log(`ACCESSING NESTED PROPERTIES of address=> `, person.address);
for (const nestedProperties in person.address){
            console.log(`${nestedProperties}: `,person.address[nestedProperties])
}

console.log(``);

console.log(`------------ EXAMPLE 2 ------------`);

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }

    displayDetails(){
        console.log(`name: `, this.name);
        console.log(`age: `,this.age);
        console.log(`--- address details ---`);
        console.log(`street: `,this.address.street);
        console.log(`city: `, this.address.city);
        console.log(`country: `, this.address.country);
    }
}

console.log(Address);
console.log(Person);

// IM JUST LAZY HERE...
// const obj = [person1,person2,person3];
// const obj = [];

// const person1 = new Person("Spongebob", 30, "124 Conch St.", 
//                                             "Bikini Bottom", 
//                                             "Int. Waters");
// obj.push(person1);

// const person2 = new Person("Patrick", 37,   "128 Conch St.", 
//                                             "Bikini Bottom", 
//                                             "Int. Waters");
// obj.push(person2);


// const person3 = new Person("Squidward", 45, "126 Conch St.", 
//                                             "Bikini Bottom", 
//                                             "Int. Waters");
// obj.push(person3);




// for (const objects of obj){
//     objects.displayDetails();
//     console.log(``);
// }

const ObjectArray = [];

function addPerson(callback, name, age, street, city, country){
    const personObj = new Person(name, age, street, city, country);
    callback(personObj);
}

function addToArray(object){
    ObjectArray.push(object);
}

addPerson(addToArray, "Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters");
addPerson(addToArray, "Patrick", 37,   "128 Conch St.", "Bikini Bottom", "Int. Waters");
addPerson(addToArray, "Squidward", 45, "126 Conch St.", "Bikini Bottom", "Int. Waters");

ObjectArray.forEach(
                    (person) => {
                        person.displayDetails();
                        console.log(``);
                    }
                )
