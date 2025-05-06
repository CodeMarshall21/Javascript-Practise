const MIN = 10;
const MAX = 20;
const ANSWER = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

let userInput;
let attemps = 0;

let running = true;

while(running){
    userInput = window.prompt(`Enter a number Between 10 - 20`);

    if (isNaN(userInput)){
        window.alert(`ENTER A VALID NUMBER`);
    }else if(userInput < MIN || userInput > MAX){
        window.alert(`ENTER A VALID NUMBER`);
    }else{
        if (userInput > ANSWER){
            window.alert(`TOO HIGH ! GUESS AGAIN`);
            attemps++;
        }
        else if(userInput < ANSWER){
            window.alert(`TOO LOW ! GUESS AGAIN`);
            attemps++;
        }
        else{
            window.alert(`AWESOME YOU FOUND em in ${attemps} ATTEMPTS !!!`);
            running = false;
        }
    }
}