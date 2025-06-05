// eventListener = Listen for specific events to create interactive web pages
//                             events: keydown, keyup
//                             document.addEventListener(event, callback);

const box = document.getElementById("box");


const movement = 30;

let x = 0;
let y = 0;


document.addEventListener("keydown", event => {
    console.log(`event.type => `,event.type);
    console.log(`event.key => `,event.key);
    console.log(``);
    
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y -= movement;
                break;
            case "ArrowDown":
                y += movement;
                break;
            case "ArrowLeft":
                x -= movement;
                break;
            case "ArrowRight":
                x += movement;
                break;
        }
        box.style.top = `${y}px`;
        box.style.left = `${x}px`;
    }

    box.style.backgroundColor = "tomato";
    box.style.borderRadius = "100px";
    box.textContent = "😲"
});




function changeBack(event){
    console.log(`event.type => `,event.type);
    console.log(`event.key => `,event.key);
    console.log(``);

    box.style.backgroundColor = "lightgreen";
    box.style.borderRadius = "0px";
    box.textContent = "☺️"
}


document.addEventListener("keyup",changeBack);