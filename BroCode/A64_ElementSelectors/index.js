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


// ---------- getElementsByTagName() ----------

// ---------- querySelector() ----------

// ---------- querySelectorAll() ----------