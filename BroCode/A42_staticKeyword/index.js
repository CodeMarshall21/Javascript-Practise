// static = keyword that defines properties or methods that belong 
//               to a class itself rather than the objects created
//               from that class (class owns anything static, not the objects)


console.log(`------------ EXAMPLE 1 ------------`);

class MathUtil{
    static PI = 3.14159;

    static getDiametre(radius){
        return `Diametre = ${radius * 2}`;
    }
}

console.log(MathUtil);
console.log(`Calling static variable = > MathUtil.PI = > `, MathUtil.PI);
console.log(`Calling static method = > MathUtil.getDiametre(10) = >`,MathUtil.getDiametre(10));


console.log(`------------ EXAMPLE 2 ------------`);
class Users{
    static userCount = 0;

    constructor (username){
        this.username = username;
        Users.userCount++;
    }

    sayHello(){
        return `HI ${this.username} !`;
    }

    static getUserCount(){
        return `Total Users: ${Users.userCount}`
    }
}

const user1 = new Users("Spongebob");
const user2 = new Users("Patrick");

console.log(`user1.sayHello() = > `,user1.sayHello());
console.log(`user2.sayHello() = > `,user2.sayHello());
console.log(`Users.getUserCount() = > `,Users.getUserCount());


