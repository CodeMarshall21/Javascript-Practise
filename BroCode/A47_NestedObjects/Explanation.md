# Understanding Nested Objects in JavaScript

## 📌 Introduction

In JavaScript, an **object** is a collection of key-value pairs where each key is a string (or symbol) and each value can be of any data type: strings, numbers, arrays, functions, or even **other objects**. When an object contains another object as one of its properties, it is called a **nested object**. This powerful feature allows us to model real-world entities with complex structures in an organized and logical way.

For example, imagine a `person` object that stores a person's details like `firstName`, `lastName`, and `age`. A person may also have an `address`, which itself is a set of related data like `street`, `city`, and `country`. By placing the address as an object inside the person object, we can group related information together clearly.

This structure is not just useful for clarity; it enables us to work with large datasets, APIs, and structured data in a scalable way. Understanding how to access, manipulate, and iterate over nested objects is a critical skill for JavaScript developers.

Let's walk through a detailed example to see how it works in practice.

---

## 💡 Code Example and Explanation

```javascript
const person = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 25,
    hobbies: ["cooking", "riding", "reading"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Waters"
    }
}

console.log(person);

for (const property in person) {
    console.log(`${property}: `, person[property]);
    if (property === "address") {
        for (const nestedProperty in person.address) {
            console.log(`${nestedProperty}: `, person.address[nestedProperty]);
        }
    }
}
```

### Step-by-Step Breakdown

#### 1️⃣ Defining the Nested Object

* We create an object called `person`.
* The `person` object has several properties:

  * Simple values like `firstName`, `lastName`, and `age`.
  * An array called `hobbies`.
  * A **nested object** called `address`, which itself contains `street`, `city`, and `country`.

#### 2️⃣ The Outer `for...in` Loop

* We use a `for...in` loop to go through all the keys in the `person` object.
* For each key, we print the key name and its corresponding value.

#### 3️⃣ Checking for the Nested Object

* We add a conditional check:

  ```javascript
  if (property === "address")
  ```
* This ensures that we only go deeper into the nested structure when we encounter the `address` property.

#### 4️⃣ The Inner `for...in` Loop

* When the condition matches (i.e., we find the `address` property), we run another `for...in` loop over the nested `address` object.
* This loop prints each key-value pair inside `address`, such as:

  * `street: 124 Conch St.`
  * `city: Bikini Bottom`
  * `country: Int. Waters`

#### 5️⃣ Final Output

Your output in the console will look like this:

```
firstName:  Spongebob
lastName:  Squarepants
age:  25
hobbies:  [ 'cooking', 'riding', 'reading' ]
address:  { street: '124 Conch St.', city: 'Bikini Bottom', country: 'Int. Waters' }
street:  124 Conch St.
city:  Bikini Bottom
country:  Int. Waters
```

Notice how the `address` object is printed as a whole first, and then each of its internal properties is printed separately.

---

## 🧭 Key Takeaways

✅ **Nested Objects** are used to model complex, hierarchical data.

✅ Access nested values using dot notation: `person.address.city`.

✅ To iterate over a nested object, use `for...in` on the parent object, then access the nested object explicitly (e.g., `person.address`).

✅ Be careful with property names—`person.properties` is not the same as `person.address`. Typos can lead to errors.

✅ This pattern is useful when working with APIs, configurations, and complex JSON data structures.

---
# Understanding the Code: Nested Classes and Object Instantiation in JavaScript

### Introduction

This code demonstrates **nested classes** in JavaScript, where one class (the `Person` class) uses another class (`Address`) as a property. This concept is helpful when modeling complex real-world data structures. Let’s break it down step by step to understand how it works and what each part of the code does.

---

### The `Address` Class

```javascript
class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}
```

* The `Address` class models an address.
* The constructor accepts three parameters: `street`, `city`, and `country`.
* When you create a new `Address` object, it stores these values as properties.

Example:

```javascript
const address1 = new Address("124 Conch St.", "Bikini Bottom", "Int. Waters");
```

---

### The `Person` Class

```javascript
class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }

    displayDetails() {
        console.log(`name: `, this.name);
        console.log(`age: `, this.age);
        console.log(`--- address details ---`);
        console.log(`street: `, this.address.street);
        console.log(`city: `, this.address.city);
        console.log(`country: `, this.address.country);
    }
}
```

* The `Person` class models a person with `name`, `age`, and an `address`.
* The constructor takes `name`, `age`, and **any remaining parameters** using the rest operator (`...address`).
* It then creates a new `Address` object using the spread operator `...address` to pass the values.

**Why use `...address`?**
This allows you to write:

```javascript
new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters")
```

Instead of passing an `Address` object directly, you pass address parts, and the constructor assembles it.

---

### Object Creation

```javascript
const person1 = new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters");
const person2 = new Person("Patrick", 37, "128 Conch St.", "Bikini Bottom", "Int. Waters");
const person3 = new Person("Squidward", 45, "126 Conch St.", "Bikini Bottom", "Int. Waters");
```

Here, you create three `Person` objects, each with different names, ages, and addresses. The `Person` constructor automatically creates the corresponding `Address` object for each person.

---

### The `displayDetails` Method

This method displays a person's details, including their address:

```javascript
objects.displayDetails();
```

The output will look like this:

```plaintext
name:  Spongebob
age:  30
--- address details ---
street:  124 Conch St.
city:  Bikini Bottom
country:  Int. Waters
```

---

### Summary

This code demonstrates:

1. **Nested Objects**: A `Person` contains an `Address` object as a property.
2. **Rest & Spread Syntax**: `...address` collects extra parameters and passes them into the `Address` constructor.
3. **Encapsulation**: The address details are encapsulated in a separate `Address` class, improving code organization and reusability.
4. **Method Calls**: Each `Person` object can display its details using the `displayDetails()` method.

This approach is scalable and maintainable, especially when dealing with complex data structures. For example, you can extend the `Address` class with more properties like postal code, state, etc., without changing the `Person` class.
