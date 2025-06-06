// classList = Element property in JavaScript used to interact
//                     with an element's list of classes (CSS classes)
//                     Allows you to make reusable classes for many elements
//                     across your webpage.

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()

let buttons = document.querySelectorAll(".my-button");

buttons.forEach(button => {
    button.classList.add("enabled");
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event =>{
        button.classList.toggle("hover");
    })
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event =>{
        button.classList.toggle("hover");
    })
})

buttons.forEach(button =>{
    button.addEventListener("click", event => {
        if (button.classList.contains("disabled")){
            button.classList.replace("disabled", "enabled");
            button.textContent = "Click me ! 😀";
        }
        else{
            button.classList.replace("enabled","disabled");
            button.textContent = "Disabled ! 😴";
        }
    })
});