// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property

class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if (typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }else{
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newLastName){
        if (typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }else{
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge){
        if (typeof newAge === "number" && newAge > 0){
            this._age = newAge;
        }else{
            console.error("Age must be a non-negative number");
        }
    }


    get firstName(){
        return `Firstname: ${this._firstName}`;
    }
    get lastName(){
        return `Lastname: ${this._lastName}`;
    }
    get fullname(){
        return `Fullname: ${this._firstName + this._lastName}`
    }
    get age(){
        return `Age: ${this._age}`;
    }
}

const user1 = new User("Spongebob","Squarepants",20);
const user2 = new User("Patrick","Star",22);
const user3 = new User("Sandy","Cheeks",23);

// im just lazy here !
const arr = [user1,user2,user3];

for (let obj of arr){
    console.log(obj);
    console.log(obj.firstName);
    console.log(obj.lastName);
    console.log(obj.fullname);
    console.log(obj.age);
}
