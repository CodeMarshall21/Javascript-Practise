// callback = a function that is passed as an argument
//                    to another function.

//                    used to handle asynchronous operations:
//                    1. Reading a file
//                    2. Network requests
//                    3. Interacting with databases

//                    "Hey, when you're done, call this next."


hello(greeting)

function hello(callback){
    console.log("hello");
    callback();   //can be any name (but the same as in paramter)
}

function greeting(){
    console.log("welcome");
}

