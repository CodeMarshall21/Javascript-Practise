// eventListener = Listen for specific events to create interactive web pages
//                             events: click, mouseover, mouseout
//                            .addEventListener(event, callback);

const box = document.getElementById("box");
const button = document.getElementById("myButton");

function changeColor(event){
    console.log(`event => `,event);
    box.style.backgroundColor = "tomato";
    box.textContent = "OUCH ! 🤕";
    console.log(`click event listened !`);
    console.log(``);
}

button.addEventListener("click", changeColor);

button.addEventListener("mouseover",function(event){
    console.log(`event => `,event);
    box.style.backgroundColor = "yellow";
    box.textContent = "Don't do it ! 😲";
    console.log(`mouseover event listened !`);
    console.log(``);
})

button.addEventListener("mouseout", event => {
    console.log(`event => `,event);
    box.style.backgroundColor = "lightgreen";
    box.textContent = "Click Me 😀";
    console.log(`mouseout event listened !`);
    console.log(``);
})