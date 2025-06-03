const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value  = "";
}

function calculate(){
    try{
        let result = eval(display.value)
        if (result === Infinity || result === -Infinity){
            display.value = "Cannot divide by zero"
        }
        else{
            display.value = result
        }
    }catch(error){
        display.value = "ERROR !"
    }
}