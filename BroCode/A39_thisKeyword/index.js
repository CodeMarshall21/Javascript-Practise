// this = reference to the object where THIS is used
//           (the object depends on the immediate context)

const person1 = {
    name: "Spongebob Squarepants",
    favFood: "Hamburgers",
    greet: function(){
        console.log(`Hello im ${this.name} !`);
    },
    eat: function(){
        console.log(`${this.name} is eating ${this.favFood}`);
    }
}
const person2 = {
    name: "Patrick Star",
    favFood: ["pizza","roast beef", "chicken"],
    greet: function(){
        console.log(`Hello im ${this.name} !`);
    },
    eat: function(){
        console.log(`${this.name} is eating ${this.favFood.join(", ")}`);
    }
}

console.log(`person 1 object => `,person1);
console.log(`person 2 object => `,person2);

console.log(`person1.functions() => `); 
person1.greet();
person1.eat();
console.log(`person2.functions() => `); 
person2.greet();
person2.eat();
