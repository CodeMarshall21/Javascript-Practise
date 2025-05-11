// rest parameters = (...rest) allow a function work with a variable
//                                  number of arguments by bundling them into an array

//                                 spread = expands an array into separate elements
//                                 rest = bundles separate elements into an array


// -------- EXAMPLE 1 --------
console.log(`-------- EXAMPLE 1 --------`);
function openFridge(...fruits){
    console.log(`packed -> `,fruits);
    console.log(`Unpacked -> `,...fruits);
}

function getFoods(...foods){
    return foods;
}

let fruit1 = "apple";
let fruit2 = "banana";
let fruit3 = "orange";
let fruit4 = "grape";
let fruit5 = "guava";

openFridge(fruit1,fruit2,fruit3,fruit4,fruit5);
console.log(`foods -> `,getFoods(fruit1,fruit2,fruit3,fruit4,fruit5));


console.log(`-------- EXAMPLE 2 --------`);


function sum(...nums){
console.log(`---- sum(...nums) ----`);

    let result = 0;
    for (let i = 0; i < nums.length; i ++){
        console.log(`num ${i} = `,nums[i])
        result += nums[i];
    }
    return result
}
let result = sum(12,25,67);
console.log(`sum - > `,result);

function average(...nums){
console.log(`---- average(...nums) ----`);
    let result = 0;
    for (let i = 0; i < nums.length; i ++){
        console.log(`num ${i} = `,nums[i])
        result += nums[i];
    }
    return Number((result / nums.length).toFixed(2));
}

let avg = average(12,25,67);

console.log(`average -> `,avg);
// console.log(typeof(avg));


console.log(`-------- EXAMPLE 3 --------`);


function combineString (...name){
    console.log(`name -> `,name)
    return name.join(" ");
}

let fullname = combineString("Mr.", "Spongebob", "Squarepants", "III");
console.log(`fullname - > `,fullname);

