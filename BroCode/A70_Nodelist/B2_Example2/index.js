// NodeList = Static collection of HTML elements by (id, class, element)
//                     Can be created by using querySelectorAll()
//                     Similar to an array, but no (map, filter, reduce) 
//                     NodeList won't update to automatically reflect changes


// ---------- CREATE A NODELIST ----------


let buttons = document.querySelectorAll(".my-buttons");

console.log(buttons);
// ---------- CLICK event listener ---------- 

buttons.forEach(button =>{
    button.addEventListener("click", event =>{
        button.style.backgroundColor = "tomato";
    })
});

// ----------  MOUSEOVER + MOUSEOUT event listener ---------- 

buttons.forEach(button =>{
    button.addEventListener("mouseover", event =>{
        button.style.backgroundColor = "hsl(240, 65%, 60%)";
    })
});

buttons.forEach(button =>{
    button.addEventListener("mouseout", event =>{
        button.style.backgroundColor = "hsl(240, 65%, 40%)";
    })
});

// ---------- ADD AN ELEMENT ----------

const newButton = document.createElement("button");

newButton.textContent = "Button 5 (this won't have effects of other 4 buttons because it was added later)";
newButton.style.fontSize = "1rem"
newButton.classList = "my-buttons";

document.body.appendChild(newButton);

// buttons = document.querySelectorAll(".my-buttons") <---- add this again to get the new button into nodelist

console.log(`after adding newButton => `,buttons,
    `
    
    this is because NodeList won't update to automatically reflect changes
    
    add this line again to append it into nodelist
    
    buttons = document.querySelectorAll(".my-buttons")
    
    `);


// ---------- REMOVE AN ELEMENT ----------

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".my-buttons");
        console.log(`number of elements after removing => `, buttons)
    });
});