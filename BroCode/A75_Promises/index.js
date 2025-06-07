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

