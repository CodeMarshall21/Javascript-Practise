// setTimeout() = function in JavaScript that allows you to schedule
//                            the execution of a function after an amount of time 
//                            Times are approximate
//                            setTimeout(callback, delay);

const displayContent = document.getElementById("container");
let timerId;
const content = [];

function showAlert(){
    window.alert("hi the timmer executed !!")
    content.push(`<h4>THE ALERT DISPLAYED !!</h4>`);
    displayContent.innerHTML = content.join(" ");
}

function startTimer(){
    content.push(`<h4>The alert shows after 5000ms</h4>`);
    timerId = setTimeout(showAlert,5000);
    displayContent.innerHTML = content.join(" ");
}

function clearTimer(){
    clearTimeout(timerId);
    content.push(`<h4>TIMMER CLEARER !</h4>`);
    displayContent.innerHTML = content.join(" ");
}
