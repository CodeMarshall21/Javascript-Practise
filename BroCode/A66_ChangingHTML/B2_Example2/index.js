// STEP 1 CREATE THE ELEMENT

const listItem1 = document.createElement("li");
const listItem2 = document.createElement("li");
const listItem3 = document.createElement("li");
const listItem4 = document.createElement("li");
const listItem5 = document.createElement("li");
const listItem6 = document.createElement("li");
const listItem7 = document.createElement("li");
const listItem8 = document.createElement("li");
const listItem9 = document.createElement("li");


// STEP 2 ADD ATTRIBUTES/PROPERTIES
listItem1.textContent = "appended list item as child of body";
listItem1.style.id = "last-body-child";
listItem1.style.fontWeight = "bold";
listItem1.style.backgroundColor = "lightgreen";

listItem2.textContent = "prepended list item as child of body";
listItem2.style.id = "first-body-child";
listItem2.style.fontWeight = "bold";
listItem2.style.backgroundColor = "lightgreen";


listItem3.textContent = "prepended list item as child of list";
listItem3.style.id = "first-list-child";
listItem3.style.fontWeight = "bold";
listItem3.style.backgroundColor = "hsl(217, 67%, 80%)";

listItem4.textContent = "appended list item as child of list";
listItem4.style.id = "last-list-child";
listItem4.style.fontWeight = "bold";
listItem4.style.backgroundColor = "hsl(217, 67%, 80%)";

listItem5.textContent = "item added before item 2";
listItem5.style.id = "item-beofre-item2";
listItem5.style.fontWeight = "bold";
listItem5.style.backgroundColor = "hsl(217, 67%, 80%)";

listItem6.textContent = "item added before item 3";
listItem6.style.id = "item-beofre-item3";
listItem6.style.fontWeight = "bold";
listItem6.style.backgroundColor = "hsl(217, 67%, 80%)";


// STEP 3 APPEND ELEMENT TO DOM
document.body.append(listItem1);
document.body.prepend(listItem2);

document.getElementById("ordered-list-items").prepend(listItem3);
document.getElementById("ordered-list-items").append(listItem4);


const item2 = document.getElementById("item2");
document.getElementById("ordered-list-items").insertBefore(listItem5,item2)

const items = document.querySelectorAll("#ordered-list-items li");
document.getElementById("ordered-list-items").insertBefore(listItem6,items[4])

// REMOVE HTML ELEMENT
// document.body.removeChild(listItem1);
// document.getElementById("ordered-list-items").removeChild(listItem6);