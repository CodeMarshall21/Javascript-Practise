// STEP 1 CREATE THE ELEMENT
const topText = document.createElement("h1");
const buttomText = document.createElement("h1");

const myH3 = document.createElement("h3");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
topText.id = "myH1"
topText.textContent = "Top Text !"
topText.style.textAlign = "center"
topText.style.color = "tomato"

myH3.textContent = "I Love Pizza !"
myH3.id = "my-h3"







buttomText.id = "myH1"
buttomText.textContent = "Buttom Text !"
buttomText.style.textAlign = "center"
buttomText.style.color = "tomato"

// STEP 3 APPEND ELEMENT TO DOM
document.body.prepend(topText)



document.getElementById("my-h3").append(myH3);






document.body.append(buttomText)

// REMOVE HTML ELEMENT
