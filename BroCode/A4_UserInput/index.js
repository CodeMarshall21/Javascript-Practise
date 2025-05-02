// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

let username;


// ------------------------- EASY WAY -------------------------
// let username = window.prompt("What's your username?");

// console.log(username);

// --------------------- PROFESSIONAL WAY ---------------------
document.getElementById("submit").onclick = function(){
    username = document.getElementById("input").value;
    document.getElementById("myH1").textContent = `Hi ${username} !`;
}