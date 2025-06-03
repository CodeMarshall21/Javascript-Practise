// element selectors =      Methods used to target and manipulate HTML elements 
//                          They allow you to select one or multiple HTML elements
//                          from the DOM (Document Object Model)

// 1. document.getElementById()                 // ELEMENT OR NULL
// 2. document.getElementsClassName()           // HTML COLLECTION
// 3. document.getElementsByTagName()           // HTML COLLECTION
// 4. document.querySelector()                  // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()               // NODELIST


// ---------- getElementById() ----------
console.log(`---------- getElementById() ----------`)

const h1Element = document.getElementById("my-h1")
console.log(`document.getElementById("my-h1") => `,h1Element)
h1Element.style.color = "blue"
h1Element.textContent += " !"
h1Element.style.textAlign = "center"

console.log(``)

// ---------- getElementsByClassName() ----------
console.log(`---------- getElementsByClassName() ----------`)

const myClass = document.getElementsByClassName("my-class");
console.log(`document.getElementsByClassName("my-class") => `,myClass)

Array.from(myClass).forEach((classes) => {
    classes.style.backgroundColor = "hsl(0, 0%, 60%)"
});

// for(let classes of myClass){
//     classes.style.backgroundColor = "hsl(0, 0%, 60%)"
// }

console.log(``)

// ---------- getElementsByTagName() ----------
console.log(`---------- getElementsByTagName() ----------`)

const h3Tag = document.getElementsByTagName("h3");
console.log(`document.getElementsByTagName("h3") => `,h3Tag);

Array.from(h3Tag).forEach((h3Tags) => {
    h3Tags.style.fontFamily = "cursive";
})

console.log(``)

// ---------- querySelector() ----------

// ---------- querySelectorAll() ----------