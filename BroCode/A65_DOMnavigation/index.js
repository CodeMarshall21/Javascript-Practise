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

fruits.forEach((fruit) => {
    const nextFruit = fruit.nextElementSibling;

    if (nextFruit) {
        console.log(`${fruit.textContent}.nextElementSibling = ${nextFruit.textContent}`);
    } else {
        console.log(`${fruit.textContent}.nextElementSibling = null`);
    }
});

console.log(``);

// ---------- .previousElementSibling ----------
console.log(`---------- .previousElementSibling ----------`);


console.log(``);

// ---------- .parentElement ----------
console.log(`---------- .parentElement ----------`);


console.log(``);

// ---------- .children ----------
console.log(`---------- .children ----------`);


console.log(``);

