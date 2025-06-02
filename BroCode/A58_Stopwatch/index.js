// STOPWATCH PROGRAM

const display = document.getElementById("display");


let timer = null; 
let startTime = 0; 
let elapsedTime = 0; 
let isRunning = false;

function start(){
    console.log("--- START button clicked ---");

    if(!isRunning){
        console.log("Timer is not running. Let's start it!");

        startTime = Date.now() - elapsedTime;
        console.log(`Starting timestamp (startTime) calculated as: ${startTime}`);

        timer = setInterval(update, 10);
        
        isRunning = true;
        console.log("Timer is now running.");
    } else {
        console.log("Timer is already running. No action taken.");
    }
}

function stop(){
    console.log("--- STOP button clicked ---");

    if(isRunning){
        console.log("Timer is running. Let's stop it.");

        clearInterval(timer);
        console.log("clearInterval() called. The update loop is now paused.");

        elapsedTime = Date.now() - startTime;
        console.log(`Saving the total elapsed time: ${elapsedTime} milliseconds`);

        isRunning = false;
        console.log("Timer is now paused.");
    } else {
        console.log("Timer is already stopped. No action taken.");
    }
}

function reset(){
    console.log("--- RESET button clicked ---");

    clearInterval(timer);
    console.log("clearInterval() called to stop any running timer.");

    startTime = 0;
    elapsedTime = 0;
    isRunning = false;    
    console.log("State variables (startTime, elapsedTime, isRunning) have been reset.");

    display.textContent = "00:00:00:00";
    console.log("Display has been reset to 00:00:00:00.");
}

function update(){
    elapsedTime = Date.now() - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    const timeString = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    
    display.textContent = timeString;

}