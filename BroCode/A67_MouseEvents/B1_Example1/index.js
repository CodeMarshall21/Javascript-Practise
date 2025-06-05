// eventListener = Listen for specific events to create interactive web pages
//                             events: click, mouseover, mouseout
//                            .addEventListener(event, callback);

const box = document.getElementById("box");


function changeColor(event){
    console.log(`event => `,event);
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH ! 🤕";
    console.log(`click event listened !`);
    console.log(``);
}

box.addEventListener("click", changeColor);

box.addEventListener("mouseover",function(event){
    console.log(`event => `,event);
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it ! 😲";
    console.log(`mouseover event listened !`);
    console.log(``);
})

box.addEventListener("mouseout", event => {
    console.log(`event => `,event);
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me 😀";
    console.log(`mouseout event listened !`);
    console.log(``);
})