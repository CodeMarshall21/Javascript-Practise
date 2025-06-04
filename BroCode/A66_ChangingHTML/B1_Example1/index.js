// STEP 1 CREATE THE ELEMENT
const topText = document.createElement("h1");
const buttomText = document.createElement("h1");

const myH3Top = document.createElement("h3");
const myH3Child = document.createElement("h3");

const textBetweenBoxes1 = document.createElement("h3");
const textBetweenBoxes2 = document.createElement("h3");


// STEP 2 ADD ATTRIBUTES/PROPERTIES
topText.id = "myH1"
topText.textContent = "Top Text !"
topText.style.textAlign = "center"
topText.style.color = "tomato"

myH3Top.textContent = "Text inside box1 ID (top child) !"
myH3Top.id = "my-h3-top"
myH3Top.style.textAlign = "center"
myH3Top.style.color = "green"

myH3Child.textContent = "Text inside box2 ID (buttom child) !"
myH3Child.id = "my-h3-buttom"
myH3Child.style.textAlign = "center"
myH3Child.style.color = "green"


textBetweenBoxes1.textContent  = "Text Between Boxes 1 (using getElementById(\"box2\"))"
textBetweenBoxes1.id = "text-between-boxes-1"
textBetweenBoxes1.style.textAlign = "center"
textBetweenBoxes1.style.color = "sky"


textBetweenBoxes2.textContent  = "Text Between Boxes 2 (using querySelectorAll(\".box\"))"
textBetweenBoxes2.id = "text-between-boxes-2"
textBetweenBoxes2.style.textAlign = "center"
textBetweenBoxes2.style.color = "sky"



buttomText.id = "myH1"
buttomText.textContent = "Buttom Text !"
buttomText.style.textAlign = "center"
buttomText.style.color = "tomato"

// STEP 3 APPEND ELEMENT TO DOM
document.body.prepend(topText)



document.getElementById("box1").prepend(myH3Top);
document.getElementById("box2").append(myH3Child);



const box2 = document.getElementById("box2");
document.body.insertBefore(textBetweenBoxes1, box2)

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(textBetweenBoxes2,boxes[2])

document.body.append(buttomText)

// REMOVE HTML ELEMENT

// document.body.removeChild(buttomText)
// document.getElementById("box1").removeChild(myH3Top)