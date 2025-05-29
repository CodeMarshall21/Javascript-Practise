const fruits = [ {name: "apple", color: "red", calories: 95}, 
                          {name: "orange", color: "orange", calories: 45}, 
                          {name: "banana", color: "yellow", calories: 105}, 
                          {name: "coconut", color: "white", calories: 159}, 
                          {name: "pineapple", color: "yellow", calories: 37}];

console.log(`const fruits => `,fruits)

// Access properties of a fruit object
console.log(`Access properties of a fruit object`)
console.log(`fruits[1].name -> `,fruits[1].name);
console.log(``);


// Add a new fruit object
console.log(`Add a new fruit object`);
fruits.push({name:"berries",color: "red", calories: 46});
console.log(`fruits.push({name:"berries",color: "red", calories: 46}); => `,fruits)
console.log(``);

// Remove the last fruit object
console.log(`Remove the last fruit object`);
fruits.pop();
console.log(`fruits.pop(); => `,fruits)
console.log(``);

// Remove fruit objects by indices
console.log(`Remove fruit objects by indices`);
console.log(``);

// ---------- forEach() ----------
console.log(`---------- forEach() ----------`);
console.log(``);

// ---------- map() ----------
console.log(`---------- map() ----------`);
console.log(``);

// ---------- filter() ----------
console.log(`---------- filter() ----------`);
console.log(``);

// ---------- reduce() ----------
console.log(`---------- reduce() ----------`);
console.log(``);