// Promise = An Object that manages asynchronous operations.
//                    Wrap a Promise Object around {asynchronous code}
//                    "I promise to return a value"
//                    PENDING -> RESOLVED or REJECTED
//                   new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

/*
----------------- WE NEED TO AVOID THIS CALLBACK HELL -----------------

function walkDog(callback){
    setTimeout(() =>{
        console.log("You walked the dog !");
        callback()
    }, 1500)
}

function cleanKitchen(callback){
    setTimeout(() =>{
        console.log("You cleaned the kitchen !");
        callback()
    }, 3000)
}

function takeTrash(callback){
    setTimeout(() =>{
        console.log("You took the trash out !");
        callback()
    }, 500)
}

//CALLBACK HELL

walkDog(()=>{
    cleanKitchen(()=>{
        takeTrash(() =>{
            console.log(`ALL CHORES FINISHED !!`);
        });
    });
});

*/

// ----------------- INSTEAD WE DO ----------------- 

function walkDog(){
    return new Promise((resolve,reject) => {
        const walking = true;

        if (walking){
            setTimeout(() =>{
            resolve("YOU WALKED THE DOG");
            }, 1500)
        }else{
            reject("YOU DID NOT WALK THE DOG !");
        }
        
    })
}

function cleanKitchen(){
    return new Promise((resolve,reject) => {
        const cleaning = true;

        if (cleaning){
            setTimeout(() =>{
            resolve("YOU CLEANED THE KITCHEN");
            }, 3000)
        }else{
            reject("YOU DID NOT CLEAN THE KITCHEN !");
        }
        
    })
}

function takeTrash(){
    return new Promise((resolve,reject) => {
        const trash = true;

        if (trash){
            setTimeout(() =>{
            resolve("YOU TOOK THE TRASH");
            }, 500)
        }else{
            reject("YOU DID NOT TAKE THE TRASH !");
        }
        
    })
}

/*
NOW USE THE object retuned by the `new Promise(resolve, reject)`
then use .then() function in it to resolve whether it is a "resolve"
or "reject"

promise.then(
  function(result) { handle a successful result  },
  function(error) {  handle an error }
);

here we do "chaining" in order to replace callback hell
*/

walkDog().then(
    (value) => {
        console.log(value);
        return cleanKitchen();
    }
).then(
    (value) => {
        console.log(value);
        return takeTrash();
    }
).then(
    (value) => {
        console.log(value);
        console.log("---- YOU FINISHED ALL THE CHORES ----");
    }
).catch(    //.catch(error)   <--- to catch eny error
    (value) =>{
        console.error(value);
    }
)


