# Your Ultimate Guide to JavaScript Getters and Setters (Beginner Friendly!)

Hey! So you're learning about getters and setters in JavaScript. That's awesome! They might seem a bit tricky at first, but they're super useful tools. Let's look at your `User` class and then explore getters and setters in simple terms.

---

## 1. Your `User` Class: Let's See What You Did!

You wrote this cool `User` class:

```javascript
// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property

class User{
    constructor(firstName, lastName, age){
        // When you do this, you're actually calling your SETTER methods below!
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // This is a SETTER for 'firstName'
    set firstName(newFirstName){
        if (typeof newFirstName === "string" && newFirstName.length > 0){
            // If the name is good, store it in a "hidden" variable _firstName
            this._firstName = newFirstName;
        }else{
            console.error("First name must be a non-empty string");
        }
    }

    // Another SETTER for 'lastName'
    set lastName(newLastName){
        if (typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }else{
            console.error("Last name must be a non-empty string");
        }
    }

    // A SETTER for 'age'
    set age(newAge){
        if (typeof newAge === "number" && newAge > 0){
            this._age = newAge;
        }else{
            // Your original message was "Age must be a non-negative number"
            // but your check is for "newAge > 0", so "positive" is more accurate.
            console.error("Age must be a positive number");
        }
    }

    // This is a GETTER for 'firstName'
    // Your comment: "without getters the values are unreadable" - Spot on!
    // Specifically, you wouldn't be able to easily get _firstName as just 'user.firstName'
    // or format it like you are here.
    get firstName(){
        return `Firstname: ${this._firstName}`;
    }

    // A GETTER for 'lastName'
    get lastName(){
        return `Lastname: ${this._lastName}`;
    }

    // A GETTER for 'fullname' - This is a "smart" property!
    get fullname(){
        // It calculates the full name when you ask for it.
        // Added a space between first and last name for better readability.
        return `Fullname: ${this._firstName} ${this._lastName}`;
    }

    // A GETTER for 'age'
    get age(){
        return `Age: ${this._age}`;
    }
}

const user1 = new User("Spongebob","Squarepants",20);
const user2 = new User("Patrick","Star",22);
const user3 = new User("Sandy","Cheeks",23);

// Let's try to give user1 a bad first name:
user1.firstName = ""; // This will try to use your 'set firstName' method!
                     // Output: "First name must be a non-empty string"
                     // user1._firstName will remain "Spongebob"

// im just lazy here ! (This is a great way to test!)
const arr = [user1,user2,user3];

for (let obj of arr){
    // When you do obj.firstName, you're calling the 'get firstName' method.
    console.log(obj.firstName); // e.g., "Firstname: Spongebob"
    console.log(obj.lastName);  // e.g., "Lastname: Squarepants"
    console.log(obj.fullname);  // e.g., "Fullname: Spongebob Squarepants"
    console.log(obj.age);       // e.g., "Age: 20"
}
```

### What's Happening in Simple Words:

1.  **The `class User` Blueprint:**
    * You're creating a template (a blueprint) for making "User" objects. Each user will have a first name, last name, and age.

2.  **The `constructor` (The Initial Setup):**
    * When you write `new User("Spongebob", "Squarepants", 20)`, the `constructor` runs.
    * Lines like `this.firstName = firstName;` look like you're just setting a variable. But because you've made special `set firstName` methods (we'll get to those!), JavaScript is smart and **calls your `set firstName` method instead!** This is super important.

3.  **`set` Methods (The Gatekeepers for Changing Data):**
    * Think of a `set` method like a **gatekeeper** for a property.
    * `set firstName(newFirstName)`: This gatekeeper is in charge when someone tries to *change* `user.firstName`.
    * **Checking the Value:** Inside, you have an `if` statement. This is your gatekeeper checking if the `newFirstName` is valid (a string and not empty).
    * **The Underscore Trick (`_firstName`):**
        * If the name is good, you store it in `this._firstName`. Why the underscore (`_`)?
        * Imagine if you wrote `this.firstName = newFirstName;` *inside* your `set firstName` method. It would be like the gatekeeper telling itself to go through the gate again, and again, and again... causing an infinite loop and a crash!
        * So, `_firstName` is like a **secret, internal box** where the actual first name is stored. The `firstName` (without the underscore) is the public "door" that uses the getter and setter.
    * Your `set lastName` and `set age` work the same way, each guarding their own secret box (`_lastName` and `_age`).

4.  **`get` Methods (The Custom Display for Reading Data):**
    * Think of a `get` method like a **custom way to display or retrieve** a property's value.
    * `get firstName()`: This runs when someone tries to *read* `user.firstName`.
    * Instead of just giving back the raw data, you're returning a nicely formatted string: `Firstname: Spongebob`. It gets the actual name from the secret box `this._firstName`.
    * **`get fullname()` (Your Smart Property!):** This is a really cool use of a getter!
        * There's no `_fullname` box. Instead, whenever you ask for `user.fullname`, this getter *calculates* it on the spot by combining `this._firstName` and `this._lastName`.
        * This means `fullname` is always up-to-date if `firstName` or `lastName` changes, and you don't have to manually update it.

5.  **Using Your Users:**
    * When you do `user1.firstName = "";`, your `set firstName` gatekeeper steps in, sees it's an empty string, and prints the error. The actual `_firstName` for `user1` doesn't change to empty.
    * When you do `console.log(obj.firstName);`, your `get firstName` method is called, and it fetches the value from `_firstName` and formats it for you.

**Why was your comment "without getters the values are unreadable" correct in this context?**
Because you chose to store the actual data in `_firstName`, `_lastName`, and `_age`. If you didn't have `get firstName()`, then `user.firstName` wouldn't know how to get the value from `_firstName` in the way you want (or at all, if you consider `_firstName` as "private-by-convention"). The getters provide the "public" way to access that internal data.

---

## 2. So, What Exactly ARE Getters and Setters? (The Simple Explanation)

Imagine a property of an object, like `user.name`.

* A **Getter** is a special function that runs **when you try to READ the property's value** (e.g., `console.log(user.name);`).
    * It lets you run some code *before* the value is returned. You can format it, calculate it, or do anything else.
* A **Setter** is a special function that runs **when you try to CHANGE the property's value** (e.g., `user.name = "Sandy";`).
    * It lets you run some code *before* the value is actually set. You can check if the new value is okay (validation!), modify it, or update other things.

**They look like you're directly accessing a property, but you're actually running a function behind the scenes!**

---

## 3. Why Bother Using Them? (The Benefits for Beginners)

1.  **Control How Data is Changed (like your validation!):**
    * **This is what you did!** You made sure names aren't empty and age is a positive number. This prevents bad data from getting into your objects. This is called **validation**.
    * *Without setters:* You'd have to remember to check the value every time you change it, or write a separate function to do it. Setters do this automatically.

2.  **Control How Data is Read (like your formatted names):**
    * You made `user.firstName` return `"Firstname: Spongebob"` instead of just `"Spongebob"`.
    * You can also use getters to combine or calculate values, like your `fullname` property!

3.  **"Smart" Properties (Computed Properties like `fullname`):**
    * Your `fullname` getter is a perfect example. It doesn't store "Spongebob Squarepants" directly. It *figures it out* when you ask for it. If `firstName` changes, `fullname` will automatically reflect that change the next time you access it.

4.  **Simpler Code for Others (and Future You!):**
    * Someone using your `User` class doesn't need to know about `_firstName` or your validation rules. They just use `user.firstName` and `user.firstName = "new name"`, and your getters/setters handle the logic. This is called **encapsulation**.

5.  **Run Code When a Property is Accessed/Changed:**
    * You could make a setter log a message every time a property changes, or a getter count how many times a property is read. (These are more advanced uses, but good to know they exist).

---

## 4. The "Underscore (`_`) Convention" - Super Important!

You used `_firstName`, `_lastName`, and `_age`. This is a very common and important pattern when using getters and setters.

* **The Problem:** If your setter for `firstName` looked like this:
    ```javascript
    set firstName(newFirstName) {
        // DANGER! This will call the 'set firstName' again!
        this.firstName = newFirstName; // Infinite loop -> Crash!
    }
    ```
    When you try to set `this.firstName`, it calls the `set firstName` method. If that method *also* tries to set `this.firstName`, it calls itself again... and again... forever!

* **The Solution:** You use a *different* name for the actual variable where you store the data. The convention is to put an underscore (`_`) in front of it: `_firstName`.
    * `firstName` (no underscore) becomes the "public face" controlled by your getter and setter.
    * `_firstName` (with underscore) is the "private storage" that the getter and setter use.

**Think of it like this:**
* `user.firstName` is the public "doorbell."
* `set firstName()` is the person who answers the doorbell when someone wants to leave something (set a value).
* `get firstName()` is the person who answers when someone wants to get something (read a value).
* `_firstName` is the safe inside the house where the item is actually kept.

---

## 5. Key Takeaways (The Cheat Sheet)

* **`get` is for READING a property's value.** It runs code when you do `let x = object.property;`.
* **`set` is for WRITING (changing) a property's value.** It runs code when you do `object.property = value;`.
* **Use an underscore (`_`)** for the internal variable that actually stores the data (e.g., `_name`) to avoid infinite loops in your setters.
* **Benefits:**
    * **Validation:** Check if new values are okay (like your `if` statements).
    * **Computed Values:** Create properties that calculate themselves (like your `fullname`).
    * **Formatting:** Change how data looks when you read it.
    * **Encapsulation:** Hide complex logic behind simple property access.

---
