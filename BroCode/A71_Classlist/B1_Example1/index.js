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
    console.log(``);
    button.classList.toggle("hover");
    console.log(`button.classList.toggle("hover") => `,button.classList);
})

button.addEventListener("mouseout", event => {
    console.log(``);
    button.classList.toggle("hover");
    console.log(`button.classList.toggle("hover") => `,button.classList);
})

//.replace(oldclass, newclass) and .contains()
button.addEventListener("click", event => {
    
    if(button.classList.contains("disabled")){
        console.log(``);
        button.classList.replace("disabled", "enabled");
        button.textContent = "Click me ! 😀"
        console.log(`button.classList.replace("disabled", "enabled") => `,button.classList);

    }
    else{
        console.log(``);
        button.classList.replace("enabled", "disabled");
        button.textContent = "Disabled ! 😴";
        console.log(`button.classList.replace("enabled", "disabled") = > `,button.classList);
    }
})
