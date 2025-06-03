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


console.log(``);

// ---------- .nextElementSibling ----------
console.log(`---------- .nextElementSibling ----------`);


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

