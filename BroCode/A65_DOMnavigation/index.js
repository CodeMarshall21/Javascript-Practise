// DOM Navigation = The process of navigating through the structure 
//                                  of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// ---------- .firstElementChild ----------
console.log(`---------- .firstElementChild ----------`);

const ulElements = document.querySelectorAll("ul");

ulElements.forEach((ulElement) => {
    const firstChild = ulElement.firstElementChild;
    console.log(ulElement,`.firstElementChild => `,firstChild)
    firstChild.style.backgroundColor = "yellow";
})


console.log(``);

// ---------- .lastElementChild ----------
console.log(`---------- .lastElementChild ----------`);

ulElements.forEach((ulElement) => {
    const lastChild = ulElement.lastElementChild;
    console.log(ulElement,`.lastElementChild => `,lastChild)
    lastChild.style.backgroundColor = "hsl(24, 98%, 80%)";
})

console.log(``);

// ---------- .nextElementSibling ----------
console.log(`---------- .nextElementSibling ----------`);

const fruits = document.querySelectorAll("#fruits li");

fruits.forEach((fruit)=>{
    const nextElement = fruit.nextElementSibling;

    if (nextElement){
        console.log(`${fruit.textContent}.nextElementSibiling => ${nextElement.textContent}`)
    }else{
        console.log(`${fruit.textContent}.nextElementSibiling => null`)
    }
})

console.log(``);

// ---------- .previousElementSibling ----------
console.log(`---------- .previousElementSibling ----------`);

const vegetables = document.querySelectorAll("#vegetables li");

vegetables.forEach((vegetable)=>{
    const prevElement = vegetable.previousElementSibling;

    if (prevElement){
        console.log(`${vegetable.textContent}.previousElementSibling => ${vegetable.textContent}`)
    }else{
        console.log(`${vegetable.textContent}.previousElementSibling => null`)
    }
})

console.log(``);

// ---------- .parentElement ----------
console.log(`---------- .parentElement ----------`);
const fruits1 = document.querySelectorAll("#fruits li")
const vegetables1 = document.querySelectorAll("#vegetables li")
const dessert = document.querySelectorAll("#desserts li")
const ulItems = document.querySelectorAll("#container ul")

fruits1.forEach((fruit) =>{
    console.log(`${fruit.textContent}.parentElement => `, fruit.parentElement.id)
});

console.log(``);

vegetables1.forEach((vegetable) =>{
    console.log(`${vegetable.textContent}.parentElement => `, vegetable.parentElement.id)
})

console.log(``)

dessert.forEach((dessert) =>{
    console.log(`${dessert.textContent}.parentElement => `, dessert.parentElement.id)
})

console.log(``)

ulItems.forEach((ulItem) =>{
    console.log(`${ulItem.id}.parentElement => `, ulItem.parentElement.id)
})

console.log(``);

// ---------- .children ----------
console.log(`---------- .children ----------`);

ulItems.forEach((ulItem) => {
    console.log(`${ulItem.id}.children =>`);
    Array.from(ulItem.children).forEach((child) => {
        console.log(child.textContent);
    });
});


console.log(``);

