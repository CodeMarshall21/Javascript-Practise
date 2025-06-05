// eventListener = Listen for specific events to create interactive web pages
//                             events: keydown, keyup
//                             document.addEventListener(event, callback);

const box = document.getElementById("box");

function changeBox(event){
    console.log(`event.type => `,event.type);
    console.log(`event.key => `,event.key);
    console.log(``);
    
    box.style.backgroundColor = "tomato";
    box.style.borderRadius = "100px";
    box.textContent = "😲"
}
function changeBack(event){
    console.log(`event.type => `,event.type);
    console.log(`event.key => `,event.key);
    console.log(``);

    box.style.backgroundColor = "lightgreen";
    box.style.borderRadius = "0px";
    box.textContent = "☺️"
}


document.addEventListener("keydown",changeBox);
document.addEventListener("keyup",changeBack);