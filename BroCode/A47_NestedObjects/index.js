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

