//COUNTER PROGRAM

const increaseBtn = document.getElementById("inc");
const decreaseBtn = document.getElementById("dec");
const resetBtn = document.getElementById("res");
const counterLbl = document.getElementById("count");
let count = 0;

increaseBtn.onclick = function(){
    count ++;
    counterLbl.textContent = count;
}

decreaseBtn.onclick = function(){
    count --;
    counterLbl.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    counterLbl.textContent = count;
}