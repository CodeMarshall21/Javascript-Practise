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

function outerCounter(){
    let count = 0
    console.log(`value of outerCounter count = ${count}`)
    function innerCounter(){
        count ++;
        console.log(`Count increased to ${count}`);
    }
    function getCount(){
        return count;
    }

    return {innerCounter, getCount}
}

console.log(outerCounter)

const object = outerCounter()
object.innerCounter();
object.innerCounter();
object.innerCounter();

console.log(`Current Count Value => object.getCount():  `,object.getCount())

console.log(``);

// ---------- EXAMPLE 3 ----------

console.log(`---------- EXAMPLE 3 ----------`);





console.log(``);

