// while loop = repeat some code WHILE some condition is true


let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Enter you username`);
    password = window.prompt(`Enter you password`);

    if(username === "myUser" && password === "myPassword123"){
        loggedIn = true;
        document.getElementById("myh1").textContent = `Welcome ${username}`;
    }
    else{
        document.getElementById("myh1").textContent = `INVALID CREDENTIALS`;

    }
}