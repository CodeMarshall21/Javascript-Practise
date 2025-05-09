
const input = document.getElementById("myValue");
const toFarenheitBtn = document.getElementById("toFarenheit");
const toCelsiusBtn = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;

function convert(){
    if (toFarenheitBtn.checked){
        temp = Number(input.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }else if(toCelsiusBtn.checked){
        temp = Number(input.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C"
    }else{
        result.textContent = temp + "Select an option !";
    }
}