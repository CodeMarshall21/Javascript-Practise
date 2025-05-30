// closure = A function defined inside of another function, 
//                  the inner function has access to the variables 
//                  and scope of the outer function.
//                  Allow for private variables and state maintenance
//                  Used frequently in JS frameworks: React, Vue, Angular

// ---------- EXAMPLE 1 ----------

console.log(`---------- EXAMPLE 1 ----------`);

function outer(){
    let a = 10;
    function inner(){
        a ++;
    }
    console.log(`Calling Outer Funtion "a" => ${a}`)
    inner();
    console.log(`Calling inner Funtion "a" => ${a}`)
}
console.log(outer);
outer()

console.log(``);

// ---------- EXAMPLE 2 ----------

console.log(`---------- EXAMPLE 2 ----------`);



console.log(``);

// ---------- EXAMPLE 3 ----------

console.log(`---------- EXAMPLE 3 ----------`);
console.log(``);

