// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;


/* 
    
    PI = 420.69;
    Uncaught TypeError: Assignment to constant variable. 

 */


document.getElementById("calculate").onclick = function(){
    radius = Number(document.getElementById("radius").value);
    circumference = 2 * PI * radius;
    console.log(circumference);
    document.getElementById("myh3").textContent = `Circumference: ${circumference}`;
}