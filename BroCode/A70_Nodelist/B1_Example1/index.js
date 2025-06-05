// NodeList = Static collection of HTML elements by (id, class, element)
//                     Can be created by using querySelectorAll()
//                     Similar to an array, but no (map, filter, reduce) 
//                     NodeList won't update to automatically reflect changes


// ---------- CREATE A NODELIST ----------


let buttons = document.querySelectorAll(".my-buttons");

console.log(buttons);
// ---------- ADD HTML/CSS PROPERTIES ----------

// buttons.forEach(button => {
//     setTimeout(() => {
//         button.style.backgroundColor = "lightgreen";
//         button.textContent += "😲";
//     }
//         , 3000)
// })

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