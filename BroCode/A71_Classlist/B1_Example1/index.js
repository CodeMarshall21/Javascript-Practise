// classList = Element property in JavaScript used to interact
//                     with an element's list of classes (CSS classes)
//                     Allows you to make reusable classes for many elements
//                     across your webpage.

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()

// ---------- button ----------


const button = document.getElementById("my-button");

console.log(`document.getElementById("my-button").classList => `,button.classList);

button.classList.add("enabled");

// button.classList.remove("enabled");      <--- to remove

//using  .toggle()
button.addEventListener("mouseover", event => {
    button.classList.toggle("hover");
})

button.addEventListener("mouseout", event => {
    button.classList.toggle("hover");
})

