// super = keyword is used in classes to call the constructor or
//              access the properties and methods of a parent (superclass)
//              this = this object
//              super = the parent


class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        return `The ${this.name} moves at ${speed}kmph`;
    }
}

class Rabbit extends Animal{
    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;
    }

    run(){
        return super.move(this.runSpeed);
    }
}
class Fish extends Animal{
    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        return super.move(this.swimSpeed);
    }
}
class Hawk extends Animal{
    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed = flySpeed;
    }

    fly(){
        return super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("Buggs Bunny", 12, 40);
const fish = new Fish("Nemo", 2, 20);
const hawk = new Hawk("Maui", 30, 50);

console.log(`Parent Class => `,Animal);

console.log(rabbit)
console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
console.log(rabbit.run());

console.log(fish)
console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
console.log(fish.swim());

console.log(hawk)
console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);
console.log(hawk.fly());