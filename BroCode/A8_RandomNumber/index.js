// RANDOM NUMBER GENERATOR

const label1 =  document.getElementById("label1");
const label2 =  document.getElementById("label2");
const label3 =  document.getElementById("label3");

let random1;
let random2;
let random3;


const MIN = 1;
const MAX = 6;



document.getElementById("roll").onclick = function(){
    random1 = Math.floor(Math.random() * MAX) + MIN;     //  <- Math.random() generated num btw 0 - 1
    random2 = Math.floor(Math.random() * MAX) + MIN;     //  <- Math.random() generated num btw 0 - 1
    random3 = Math.floor(Math.random() * MAX) + MIN;     //  <- Math.random() generated num btw 0 - 1

    label1.textContent = random1;
    label2.textContent = random2;
    label3.textContent = random3;

}

// label1.textContent = "hello";