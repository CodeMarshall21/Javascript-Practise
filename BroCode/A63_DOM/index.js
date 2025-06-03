// DOM = DOCUMENT OBJECT MODEL
//              Object{} that represents the page you see in the web browser 
//              and provides you with an API to interact with it.
//             Web browser constructs the DOM when it loads an HTML document,
//             and structures all the elements in a tree-like representation.
//             JavaScript can access the DOM to dynamically 
//             change the content, structure, and style of a web page.

console.log(document)
console.dir(document)

document.title = "DOM"

document.body.style.backgroundColor = "hsl(0, 0%, 15%)";

console.log(`
    document.title = "DOM"

    document.body.style.backgroundColor = "hsl(0, 0%, 15%)";
    `)

const username = window.prompt("Enter Username");

const welcome_msg = document.getElementById("welcome-msg")

welcome_msg.textContent += username === "" ? "Guest" : username;